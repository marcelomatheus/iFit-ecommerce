import OrderItemsModel from '../models/OrderItemsModel';
import OrderModel from '../models/OrderModel';
import { format } from 'date-fns';

const getOrderByCustomer = async (req, res) => {
    const Cpf_Cliente = req.params.customerId;
    try {
        const queryResultArray = await OrderModel.findAll({ where: { Cpf_Cliente: Cpf_Cliente } });
        if (!queryResultArray[0]) return res.json({ message: 'Não há produtos no carrinho' });
        return res.json(queryResultArray);
    } catch (error) {
        return res.json({ error: 'Não foi possível carregar seu carrinho', details: error });
    }
};

const getIdOrder = async (customerId) => {
    try {
        const resultVerify = await verifyOrder(customerId);
        if (resultVerify) return resultVerify.Cod_Pedido;

        const orderCreated = await createOrder(customerId);
        if (orderCreated) return orderCreated.Cod_Pedido;
        return { error: 'Não foi possível criar o carrinho' };
    } catch (error) {
        return { error: "Não foi possível verificar o pedido", details: error };
    }
};

const verifyOrder = async (customerId) => {
    try {
        const order = await OrderModel.findOne({ where: { Cpf_Cliente: customerId, Esta_Finalizado: false } });
        return order;
    } catch (error) {
        return { error: 'Erro de verificação do pedido', details: error };
    }
};

const createOrder = async (customerId) => {
    try {
        const dateTimeCurrent = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        const orderCreated = await OrderModel.create({
            Cpf_Cliente: customerId,
            Data_Pedido: dateTimeCurrent,
            Quantidade: 0,
            Esta_Finalizado: false,
        });
        return orderCreated;
    } catch (error) {
        return { error: 'Erro de criação do pedido', details: error };
    }
};

const insertProductOrder = async (req, res) => {
    const { productId, customerId, amount } = req.body;

    try {
        const orderId = await getIdOrder(customerId);
        if (orderId.error) return res.json(orderId.error);

        const resultQuery = await OrderItemsModel.create({
            Cod_Pedido: orderId,
            Cod_Produto: productId,
            Quantidade: amount,
        });
        return res.json(resultQuery);
    } catch (error) {
        return res.json({ error: 'Não foi possível inserir o produto no carrinho', details: error });
    }
};

const deleteProductOrder = async (req, res) => {
    const { customerId, productId } = req.params;
    try {
        const order = await verifyOrder(customerId);
        if (!order) return res.json({ error: 'Esse pedido não existe ou já foi finalizado' });

        const resultDelete = await OrderItemsModel.destroy({
            where: { Cod_Pedido: order.Cod_Pedido, Cod_Produto: productId },
        });

        if (resultDelete) return res.status(200).json({ message: 'Produto retirado do seu carrinho de compras' });
        return res.status(400).json({ error: 'Não foi possível deletar o produto' });
    } catch (error) {
        return res.json({ error: 'Não foi possível deletar o produto', details: error });
    }
};

const updateOrder = async (req, res) => {
    const idCustomer = req.params.customerId;
    const updateData = req.body;

    try {
        const order = await verifyOrder(idCustomer);
        if (!order) return res.json({ error: 'Pedido não encontrado ou já finalizado' });

        const queryResult = await OrderModel.update(updateData, { where: { Cod_Pedido: order.Cod_Pedido } });
        if (!queryResult[0]) return res.json({ error: 'Não foi possível atualizar o pedido' });
        return res.json(queryResult[0]);
    } catch (error) {
        return res.json({ error: '[update order error]', details: error });
    }
};

const completedOrder = async (req, res) => {
    const customerId = req.params.customerId;

    try {
        const order = await verifyOrder(customerId);
        if (!order) return res.json({ error: 'Pedido não encontrado ou já finalizado' });

        const queryResult = await OrderModel.update({ Esta_Finalizado: true }, {
            where: { Cod_Pedido: order.Cod_Pedido, Esta_Finalizado: false },
        });

        if (!queryResult[0]) return res.json({ error: 'Não foi possível atualizar o status do pedido' });
        return res.json(queryResult[0]);
    } catch (error) {
        return res.json({ error: '[complete order error]', details: error });
    }
};

export default {
    getOrderByCustomer,
    insertProductOrder,
    deleteProductOrder,
    updateOrder,
    completedOrder,
};
