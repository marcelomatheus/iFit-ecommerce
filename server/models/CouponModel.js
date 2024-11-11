import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Coupon = database.define('Cupom', {
    cod_cupom: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contexto: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{
    tableName: 'cupom', 
    timestamps: false,  
  });

module.exports=Coupon;