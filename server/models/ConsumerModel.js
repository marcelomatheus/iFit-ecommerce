import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const User = database.define('Cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf_cliente: {
        type: DataTypes.STRING,
        allowNull: false
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

})

export default User;