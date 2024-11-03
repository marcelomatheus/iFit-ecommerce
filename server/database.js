const {Sequelize} = require('sequelize');


const database = new Sequelize('ifit_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export default database;