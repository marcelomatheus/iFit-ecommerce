import express from 'express';
const router = express.Router();
import cors from 'cors';
import {signup, getCustomerByEmail, getCustomerByCpf, updateCustomer, deleteCustomer} from '../service/customerServiceService';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.post('/customer', signup)
router.get('/customer/:Cpf_Cliente', getCustomerByCpf)
router.get('/customer/:Email', getCustomerByEmail)
router.update('/customer/:Cpf_Cliente', updateCustomer)
router.delete('/customer/:Cpf_Cliente', getCustomerByEmail)

export default router;