import express from 'express';
const router = express.Router();
import cors from 'cors';
import {login, register} from '../service/authService.js';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)


router.post('/auth/login',login)
router.post('/auth/register',register)

export default router;