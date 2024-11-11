import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const PaymentStatus = database.define('Status_Pagamento', {
    cod_status_pag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{
    tableName: 'status_pagamento', 
    timestamps: false,  
  });

export default PaymentStatus;