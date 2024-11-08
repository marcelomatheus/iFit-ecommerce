import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

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
});

module.exports=DeliveryStatus;