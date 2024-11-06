
import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

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
});

export default ProductCategory;