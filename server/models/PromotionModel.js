
import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const Promotion = database.define('Promocao', {
    cod_promo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    valor_promo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, 
{
    tableName: 'promocao', 
    timestamps: false,  
  });

export default Promotion;