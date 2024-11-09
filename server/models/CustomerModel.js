import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Customer = database.define('cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, 
{
    tableName: 'cliente', 
    timestamps: false,  
  })
export default Customer;
