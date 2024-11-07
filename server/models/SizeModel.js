import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Size = database.define('Tamanho', {
    Cod_Tamanho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Descricao: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

export default Size;
