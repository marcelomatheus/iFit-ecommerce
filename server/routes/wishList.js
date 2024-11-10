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

router.get('/wish-list/:customerId', getOrderByCustomer)
router.post('/wish-list', insertProductOrder)
router.delete('/wish-list/:customerId/:productId', deleteProductOrder)
router.update('/wish-list/:customerId', updateOrder)
router.update('/wish-list/:customerId', completedOrder)
export default router;
