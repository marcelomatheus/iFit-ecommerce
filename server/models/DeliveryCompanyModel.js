import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const DeliveryCompany = database.define('Empresa_Entrega', {
    cod_entregador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.CHAR(14),
        allowNull: false
    }
}, 
{
    tableName: 'empresa_entrega', 
    timestamps: false,  
  });

export default DeliveryCompany;