import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Supplier = database.define('Fornecedor', {
    Cod_Fornecedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    CNPJ: {
        type: DataTypes.CHAR(14),
        allowNull: false
    },
    Nome: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    Telefone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Endereco: {
        type: DataTypes.STRING(150),
        allowNull: false
    }
}, 
{
    tableName: 'fornecedor', 
    timestamps: false,  
  });

export default Supplier;
