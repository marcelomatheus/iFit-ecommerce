import Customer from '../models/CustomerModel'

const signup = async (req,res) =>{
        const dataCustomer = req.body;

        try{
        
        if(!data) res.json({error:'[data error]'})
        
            const resultQuery = await Customer.create({
                nome: data.nome,
                cpf_cliente: data.cpf_cliente, 
                email: data.email, 
                cep: data.cep, 
                telefone: data.telefone, 
                endereco: data.endereco,
                Cod_Usuario: data.Cod_Usuario
            })
            return res.json(resultQuery)
            
    }catch(err){
        return res.json({error: '[signup customer error]', err})
    }

}

const getCustomerByEmail = async (req,res) =>{
        const customerEmail = req.params.email;
        if(!customerEmail) return res.json({error:'[Params not define]'})
        try{
            const queryResult = await Customer.findOne({where:{email:customerEmail}});
            if(!queryResult) return res.json({error: 'Cliente não encontrado'})
            return res.json(queryResult)
        }catch(err){
            return res.json({error: '[getCustomer error]', err})
        }
}

const getCustomerByCpf = async (req,res)=>{
    const idCustomer = req.params.Cpf_Cliente;
    try{
        const queryResult = await Customer.findOne({where:{Cpf_Cliente:idCustomer}});
        if(!queryResult) return res.json({erros: 'Cliete não encontrado'})
        return res.json(queryResult)
    }catch(err){
        res.json({error: '[getCustomer error]', err})
    }
}

const deleteCustomer = async (req,res)=>{
    const idCustomer = req.params.Cpf_Cliente;
    try{
        const queryResult = await Customer.destroy({where:{Cpf_Cliente:idCustomer}});
        if(!queryResult) return res.json({erros: 'Cliete não apagado'})
        return res.json(queryResult)
    }catch(err){
        res.json({error: '[getCustomer error]', err})
    }
}
const updateCustomer = async (req, res)=>{
    const dataCustomer = req.body;
    const idCustomer = req.params.Cpf_Cliente;
    const oldData = await Customer.findOne({where:{Cpf_Cliente:idCustomer}})
    if(!oldData) return res.status(404).json({error: 'Cliente não encontrado'});
    try{
        const queryResult = await Customer.update({dataCustomer},{where:{Cpf_Cliente:idCustomer}});
        if(!queryResult[0]) return res.status(400).json({erros: 'Cliete não atualizado'})
        return res.status(200).json(queryResult[0])
    }catch(err){
        res.json({error: '[getCustomer error]', err})
    }
}
export default {signup, getCustomerByEmail, getCustomerByCpf, updateCustomer, deleteCustomer};
