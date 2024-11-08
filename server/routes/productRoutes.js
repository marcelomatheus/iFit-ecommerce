import express from 'express';
const router = express.Router();
import cors from 'cors';
import {test, login, register}  from '../service/productService';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/',test)
/*router.post('/login',login)
router.post('/register',register)*/

export default router;