const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json());
app.use('/',require('./routes/authRoutes'))
app.use('/data',require('./routes/productRoutes'))

app.listen(process.env.PORT, ()=>console.log('server running in ', process.env.PORT ))