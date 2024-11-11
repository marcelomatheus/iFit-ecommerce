import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const OrderItems = database.define('Itens_Pedido', {
    cod_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ShoppingCart',
            key: 'cod_pedido'
        }
    },
    cod_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'cod_produto'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    tableName: 'itens_pedido', 
    timestamps: false,  
  });

export default OrderItems;