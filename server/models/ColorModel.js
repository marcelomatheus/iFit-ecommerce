import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Color = database.define('Cor', {
    cod_cor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

module.exports=Color;
