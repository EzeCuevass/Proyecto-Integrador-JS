const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const VentaProducto = sequelize.define("VentaProducto", {
    id_venta: { type: DataTypes.INTEGER, primaryKey: true },
    id_producto: { type: DataTypes.INTEGER, primaryKey: true },
    cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
}, {
    tableName: "ventas_productos"
});

module.exports = VentaProducto;