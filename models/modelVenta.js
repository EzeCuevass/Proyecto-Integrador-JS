const {Sequelize, DataTypes, DECIMAL} = require('sequelize');
const sequelize = new Sequelize('../db')

const Venta = sequelize.define("Venta", {
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    usuario_id: {type: DataTypes.INTEGER, allowNull:false},
    fecha: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
    precio_total: {type: DataTypes.DECIMAL(10,2), allowNull: false}
}, {
    tableName: "ventas"
}
)
module.exports = Venta;