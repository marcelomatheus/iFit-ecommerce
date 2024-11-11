import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb.js";

const Payment = database.define('Pagamento', {
    cod_pagamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    cod_pedido: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'ShoppingCart',
            key: 'cod_pedido'
        }
    },
    metodo_pag: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'PaymentMethod',
            key: 'metodo_pag'
        }
    },
    nota_fiscal: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    status_pag: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'PaymentStatus',
            key: 'cod_status_pag'
        }
    }
}, 
{
    tableName: 'pagamento', 
    timestamps: false,  
  });

export default Payment;