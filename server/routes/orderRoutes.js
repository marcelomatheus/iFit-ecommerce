import express from 'express';
const router = express.Router();
import cors from 'cors';
import {getOrderByCustomer, insertProductOrder, deleteProductOrder, updateOrder, completedOrder} from '../service/orderService.js';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/order/:customerId', getOrderByCustomer)
router.post('/order', insertProductOrder)
router.delete('/order/:customerId/:productId', deleteProductOrder)
router.put('/order/update/:customerId', updateOrder)
router.put('/order/completedOrder/:customerId', completedOrder)

export default router;
