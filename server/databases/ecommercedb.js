const {Sequelize} = require('sequelize');


const database = new Sequelize('db_ifit','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
const connection =  async () =>{
    try {
        await database.authenticate();
        return 'connected'
      } catch (error) {
        return 'failed'
      } 
}
module.exports = connection;