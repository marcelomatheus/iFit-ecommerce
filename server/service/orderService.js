import OrderItemsModel from '../models/OrderItemsModel'
import OrderModel from '../models/OrderModel'
import {format} from 'date-fns'
const getOrderByCustomer = async (req,res) => {
    // encontrar produtos de um pedido específico em aberto
    const Cpf_Cliente = req.params.Cpf_Cliente;
    try {
        const queryResultArray = await OrderModel.findAll({where:{Cpf_Cliente: Cpf_Cliente}});
        if(!queryResultArray[0]) return res.json({message: 'Não há produtos no carrinho'});
        return res.json(queryResultArray);
    } catch (error) {
        return res.json({error: 'Não foi possível carregar seu carrinho',err});
    }
}
//Cpf_Cliente, Data_Pedido, Quantidade, Esta_Finalizado
const getIdOrder = async (customerId) => {
    try {
        const resultVerify = verifyOrder(customerId);
        if(resultVerify) return resultVerify.Cod_Pedido;
        
        const orderCreated = await createOrder(customerId);
        if(orderCreated) return orderCreated.cod_pedido;
        return {error: 'Não foi possível criar o carrinho'}

    } catch (error) {
        return {error: "Não possível verificar o pedido", err};
    }
}

const verifyOrder = async (customerId) => {
    try {
        const order = await OrderModel.findOne({where:{Cpf_Cliente: customerId, esta_finalizado: false}});
        return order;
    } catch (error) {
        return ({error: 'erro de verificação do pedido', err})
    }
    
    
}

const createOrder = async (customerId) =>{
    try{
        const dateTimeCurrent = format(new Date, 'yyyy-MM-dd HH:mm:ss');
        const orderCreated = await OrderModel.create({
            Cpf_Cliente: customerId,
            Data_Pedido: dateTimeCurrent,
            Quantidade: 0,
            Esta_Finalizado: false
        })
        return orderCreated;
    }catch(err){
        return {error:'error de criação do pedido',err}
    }
}
const insertProductOrder = async (req,res) => {
    // verificar se existe pedido aberto para o cliente
    // se não tiver, ele cria, se tiver, pega o id do carrinho e cria um productItem com id do carrinho
    const {productId, customerId, amount} = req.body;
    
    try {
        //cod_pedido, cod_produto, quantidade, 
        const orderId = await getIdOrder(customerId);
        if(getIdOrder.error) return res.json(getIdOrder.error)
        const resultQuery = await OrderItemsModel.create({
            cod_pedido: orderId,
            cod_produto: productId,
            quantidade: amount
        })
        return res.json(resultQuery)
    } catch (err) {
        return res.json({error: 'Não foi possível inserir o produto no carrinho',err});
    }
}

const deleteProductOrder = async (req,res) => {
    const {customerId, productId} = req.params;
    try{
    const order = await verifyOrder(customerId);
    if(!order) res.json({error:'Esse pedido não existe ou já foi finalizado'})
    const resultDelete = await clientModel.destroy({
            where: {Cod_Pedido: order, Cod_Produto: productId}
        })
    if(resultDelete) return res.status(200).json({message:'Produto retirado do seu carrinho de compras'});
    return res.status(400).json({error: 'Não foi possível deletar o produto'})
    }catch(err){
        return res.json({error: 'Não foi possível deletar o produto',err});
    }

}

const updateOrder = async (req,res) =>{

}

const completedOrder = async (req,res) => {

}

export default {getOrderByCustomer, insertProductOrder, deleteProductOrder, updateOrder, completedOrder}
