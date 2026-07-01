const { Producto } = require('../models');
// Vista de login
const signin = async (req,res) => {
    res.render('admin/login', {error: null})
}
// Vista de dashboard
const dashboard = async (req, res) => {
    const productos = await Producto.findAll({ order: [["id", "ASC"]] });
    res.render('admin/dashboard', { productos });
}
// Muestra el formulario de alta, o de edicion
const showForm = async (req, res) => {
    const mode = req.params.id ? 'editar' : 'alta';
    res.render('admin/producto-form', { mode, producto: null });
}
// Crear producto
const createProduct = async (req, res) => {
    const data = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        activo: 1,
        imagen: req.file ? req.file.filename : null
    };
    await Producto.create(data);
    res.redirect("/admin/dashboard");
}
// Actualizar producto
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria
    };
    if (req.file) data.imagen = req.file.filename;
    await Producto.update(data, { where: { id } });
    res.redirect("/admin/dashboard");
}
// Activar/desactivar producto
const toggleStatus = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return res.redirect("/admin/dashboard")
    };
    const nuevoEstado = req.path.includes("activar") ? 1 : 0;
    await Producto.update({ activo: nuevoEstado }, { where: { id } });
    res.redirect("/admin/dashboard");
}
// Logout
const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/admin/login");
};

module.exports = { signin, dashboard, showForm, createProduct, updateProduct, toggleStatus, logout }