import express from 'express';
const router = express.Router();
import cors from 'cors';
import {getOrderByCustomer, insertProductOrder, deleteProductOrder, updateOrder, completedOrder} from '../service/orderService';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/order/:customerId', getOrderByCustomer)
router.post('/order', insertProductOrder)
router.delete('/order/:customerId/:productId', deleteProductOrder)
router.update('/order/:customerId', updateOrder)
router.update('/order/:customerId', completedOrder)

export default router;
