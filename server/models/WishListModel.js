import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Wishlist = database.define('Wishlist', {
    Cod_Wish: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    CPF_Cliente: {
        type: DataTypes.CHAR(11),
        allowNull: false,
        references: {
            model: 'Consumer', // Referência ao modelo 'Cliente'
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
});

export default Wishlist;
