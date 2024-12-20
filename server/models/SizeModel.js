import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Size = database.define('Tamanho', {
    Cod_Tamanho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Descricao: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, 
{
    tableName: 'tamanho', 
    timestamps: false,  
  });

export default Size;
