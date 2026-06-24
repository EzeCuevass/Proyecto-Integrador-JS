const Usuario = require("./modelUsuario");
const Producto = require("./modelProducto");
const Venta = require("./modelVenta");
const VentaProducto = require("./modelVenta_Prod");

Usuario.hasMany(Venta, { foreignKey: "usuario_id" });
Venta.belongsTo(Usuario, { foreignKey: "usuario_id" });

Producto.belongsToMany(Venta, {
    through: VentaProducto,
    foreignKey: "id_producto",
    otherKey: "id_venta",
});

Venta.belongsToMany(Producto, {
    through: VentaProducto,
    foreignKey: "id_venta",
    otherKey: "id_producto",
});

module.exports = { Usuario, Producto, Venta, VentaProducto };