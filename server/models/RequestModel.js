import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Request = database.define('Solicitacao', {
    Cod_Solicita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Cod_Produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Produt', // Referência ao modelo 'Produto'
            key: 'Cod_Produto'
        }
    },
    Qnt_Solicitada: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Data_Solicitada: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, 
{
    tableName: 'solicitacao', 
    timestamps: false,  
  });

export default Request;
