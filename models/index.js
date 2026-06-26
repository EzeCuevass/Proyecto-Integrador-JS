const Usuario = require("./modelUsuario");
const Producto = require("./modelProducto");
const Venta = require("./modelVenta");
const VentaProducto = require("./modelVenta_Prod");

// Conexiones entre tablas

// Un usuario puede comprar muchas cosas, puede estar en muchas ventas
Usuario.hasMany(Venta, { foreignKey: "usuario_id" });
// Una venta, se hace a un usuario
Venta.belongsTo(Usuario, { foreignKey: "usuario_id" });

// Un producto puede estar en muchas ventas
Producto.belongsToMany(Venta, {
    through: VentaProducto,
    foreignKey: "id_producto",
    otherKey: "id_venta",
});
// Una venta puede tener muchos productos
Venta.belongsToMany(Producto, {
    through: VentaProducto,
    foreignKey: "id_venta",
    otherKey: "id_producto",
});

module.exports = { Usuario, Producto, Venta, VentaProducto };