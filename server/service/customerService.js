import Customer from '../models/CustomerModel';

const signup = async (req, res) => {
    const dataCustomer = req.body;

    try {
        if (!dataCustomer) return res.json({ error: '[data error]' });

        const resultQuery = await Customer.create({
            nome: dataCustomer.nome,
            cpf_cliente: dataCustomer.cpf_cliente, 
            email: dataCustomer.email, 
            cep: dataCustomer.cep, 
            telefone: dataCustomer.telefone, 
            endereco: dataCustomer.endereco,
            Cod_Usuario: dataCustomer.Cod_Usuario
        });
        return res.json(resultQuery);
        
    } catch (err) {
        return res.json({ error: '[signup customer error]', details: err });
    }
};

const getCustomerByEmail = async (req, res) => {
    const customerEmail = req.params.email;
    if (!customerEmail) return res.json({ error: '[Params not defined]' });
    try {
        const queryResult = await Customer.findOne({ where: { email: customerEmail } });
        if (!queryResult) return res.json({ error: 'Cliente não encontrado' });
        return res.json(queryResult);
    } catch (err) {
        return res.json({ error: '[getCustomer error]', details: err });
    }
};

const getCustomerByCpf = async (req, res) => {
    const idCustomer = req.params.Cpf_Cliente;
    try {
        const queryResult = await Customer.findOne({ where: { cpf_cliente: idCustomer } });
        if (!queryResult) return res.json({ error: 'Cliente não encontrado' });
        return res.json(queryResult);
    } catch (err) {
        return res.json({ error: '[getCustomer error]', details: err });
    }
};

const deleteCustomer = async (req, res) => {
    const idCustomer = req.params.Cpf_Cliente;
    try {
        const result = await Customer.destroy({ where: { cpf_cliente: idCustomer } });
        if (!result) return res.json({ error: 'Cliente não apagado' });
        return res.json({ message: 'Cliente apagado com sucesso' });
    } catch (err) {
        return res.json({ error: '[deleteCustomer error]', details: err });
    }
};

const updateCustomer = async (req, res) => {
    const dataCustomer = req.body;
    const idCustomer = req.params.Cpf_Cliente;

    try {
        const oldData = await Customer.findOne({ where: { cpf_cliente: idCustomer } });
        if (!oldData) return res.status(404).json({ error: 'Cliente não encontrado' });

        const [updateCount] = await Customer.update(dataCustomer, { where: { cpf_cliente: idCustomer } });
        if (!updateCount) return res.status(400).json({ error: 'Cliente não atualizado' });
        
        return res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    } catch (err) {
        return res.json({ error: '[updateCustomer error]', details: err });
    }
};

export default { signup, getCustomerByEmail, getCustomerByCpf, updateCustomer, deleteCustomer };
