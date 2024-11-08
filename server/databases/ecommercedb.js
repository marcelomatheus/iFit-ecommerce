import {Sequelize} from 'sequelize';


const database = new Sequelize('mysql://root:@localhost:3306/db_ifit') 
const connection =  async () =>{
    try {
        await database.authenticate();
        return 'connected'
      } catch (error) {
        return 'failed'
      } 
}
module.exports = {database, connection};