import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Color = database.define('Cor', {
    cod_cor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, 
{
    tableName: 'cor', 
    timestamps: false,  
  });

export default Color;
