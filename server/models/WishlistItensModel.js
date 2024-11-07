import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const WhishlistItens = database.define('Itens_Wish', {
    Cod_Wish: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Wishlist', // Referência ao modelo 'Wishlist'
            key: 'Cod_Wish'
        },
        primaryKey: true
    },
    Cod_Produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product', // Referência ao modelo 'Produto'
            key: 'Cod_Produto'
        },
        primaryKey: true
    },
    Quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default WhishlistItens;
