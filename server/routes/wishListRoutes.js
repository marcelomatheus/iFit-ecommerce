import express from 'express';
const router = express.Router();
import cors from 'cors';
import {getWishListByCustomer, insertProductWishList, deleteProductWishList, updateWishList} from '../service/wishListService.js';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/wish-list/:customerId', getWishListByCustomer)
router.post('/wish-list', insertProductWishList)
router.delete('/wish-list/:customerId/:productId', deleteProductWishList)
router.put('/wish-list/:customerId', updateWishList)

export default router;
