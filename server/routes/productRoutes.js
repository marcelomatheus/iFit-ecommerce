import express from 'express';
const router = express.Router();
import cors from 'cors';
import {getProducts, getProductById}  from '../service/productService.js';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/products/all/:productId',getProductById)
router.get('/products/:minPrice/:maxPrice/:category',getProducts)


export default router;