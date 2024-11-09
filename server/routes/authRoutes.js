import express from 'express';
const router = express.Router();
import cors from 'cors';
import {test, login, register} from '../service/authService';


router.use(
    cors({
        credentials: true,
        origin: 'http://localhost'
    })
)

router.get('/auth',test)
router.post('/auth/login',login)
router.post('/auth/register',register)

export default router;