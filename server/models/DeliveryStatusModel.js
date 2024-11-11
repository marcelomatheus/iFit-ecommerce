import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const DeliveryStatus = database.define('Status_Entrega', {
    cod_status_entrega: {
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
    tableName: 'status_entrega', 
    timestamps: false,  
  });

export default DeliveryStatus;