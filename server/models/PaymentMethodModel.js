import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const PaymentMethod = database.define('Metodo_Pagamento', {
    metodo_pag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    metodo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{
    tableName: 'metodo_pagamento', 
    timestamps: false,  
  });
export default PaymentMethod;
