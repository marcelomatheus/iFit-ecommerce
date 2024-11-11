import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Order = database.define('Pedido', {
    Cod_Pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    CPF_Cliente: {
        type: DataTypes.CHAR,
        allowNull: false,
        references: {
            model: 'Customer', 
            key: 'CPF_Cliente'
        }
    },
    Data_Pedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Esta_Finalizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, 
{
    tableName: 'pedido', 
    timestamps: false,  
  });

export default Order;
