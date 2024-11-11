
import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const ProductCategory = database.define('Categoria_Produto', {
    cod_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, 
{
    tableName: 'categoria_produto', 
    timestamps: false,  
  });

export default ProductCategory;