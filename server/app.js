import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import productRoutes from './routes/productRoutes.js'
//import paymentRoutes from './routes/paymentRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import wishListRoutes from './routes/wishListRoutes.js'
//import deliveryRoutes from './routes/deliveryRoutes.js'
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';

dotenv.config();
const app = express()

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//app.use('/',(req,res)=>{res.send('connected')})
app.use('/images', express.static(path.join(__dirname, './public/images')));
app.use(authRoutes)
app.use(productRoutes)
app.use(customerRoutes)
//app.use(deliveryRoutes)
app.use(orderRoutes)
app.use(wishListRoutes)
//app.use(paymentRoutes)

app.listen(process.env.PORT, ()=>console.log('server running in ', process.env.PORT ))