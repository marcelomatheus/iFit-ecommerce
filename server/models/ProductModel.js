const { DataTypes } = require("sequelize");
const { database } = require("../databases/ecommercedb");

const Product = database.define('produto', {
    cod_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nome_produto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    promocao: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cod_fornecedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qnt_disponivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qnt_desejavel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qnt_minima: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qnt_maxima: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports=Product;