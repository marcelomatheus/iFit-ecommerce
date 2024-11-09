import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const WhishlistItens = database.define('Itens_Wish', {
    Cod_Wish: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Wishlist', 
            key: 'Cod_Wish'
        },
        primaryKey: true
    },
    Cod_Produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product', 
            key: 'Cod_Produto'
        },
        primaryKey: true
    },
    Quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    tableName: 'itens_wish', 
    timestamps: false,  
  });

export default WhishlistItens;
