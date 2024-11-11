import express from 'express';
const router = express.Router();
import cors from 'cors';
import {signup, getCustomerByEmail, getCustomerByCpf, updateCustomer, deleteCustomer} from '../service/customerService.js';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.post('/customer', signup)
router.get('/customer/getCustomerCpf/:Cpf_Cliente', getCustomerByCpf)
router.get('/customer/getCustomerEmail/:Email', getCustomerByEmail)
router.put('/customer/:Cpf_Cliente', updateCustomer)
router.delete('/customer/:Cpf_Cliente', getCustomerByEmail)

export default router;