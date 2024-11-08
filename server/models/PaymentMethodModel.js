import { DataTypes } from "sequelize";
import database from "../databases/ecommercedb";

const PaymentMethod = database.define('Metodo_Pagamento', {
    metodo_pag: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    metodo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports=PaymentMethod;
