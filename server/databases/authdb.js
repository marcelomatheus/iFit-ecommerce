
const mongoose = require('mongoose');
require('dotenv').config()
import "dotenv/config"

const authdb = () =>{ 
    const user = process.env.USER;
    const password = process.env.PASSWORD;
    
    mongoose.connect(`mongodb+srv://${user}:${password}@authlogin.4znsd.mongodb.net/?retryWrites=true&w=majority&appName=authLogin
`)
.then(()=> console.log('database auth connected'))
.catch((err)=> console.log('database not connected'))
}
module.exports = authdb