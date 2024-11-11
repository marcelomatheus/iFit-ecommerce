import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Wishlist = database.define('Wishlist', {
    Cod_Wish: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    CPF_Cliente: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        references: {
            model: 'Customer', 
            key: 'CPF_Cliente'
        }
    },
    Cod_Produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product', // Referência ao modelo 'Produto'
            key: 'Cod_Produto'
        }
    }
}, 
{
    tableName: 'wishlist', 
    timestamps: false,  
  });

export default Wishlist;
