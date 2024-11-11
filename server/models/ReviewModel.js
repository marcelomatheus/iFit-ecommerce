import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Review = database.define('Avaliacao', {
    Cod_Avalia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    CPF_Cliente: {
        type: DataTypes.CHAR,
        allowNull: false,
        references: {
            model: 'Customer', // Referência ao modelo 'Cliente'
            key: 'CPF_Cliente'
        }
    },
    Cod_Produto: {
        type: DataTypes,
        allowNull: false,
        references: {
            model: 'Product', // Referência ao modelo 'Produto'
            key: 'Cod_Produto'
        }
    },
    Nota: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    tableName: 'avaliacao', 
    timestamps: false,  
  });

export default Review;
