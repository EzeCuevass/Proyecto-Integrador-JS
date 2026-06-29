const { Producto } = require('../models');

const signin = async (req,res) => {
    res.render('admin/login')
}

const dashboard = async (req, res) => {
    const productos = await Producto.findAll({ order: [["categoria", "ASC"], ["nombre", "ASC"]] });
    const categorias = [...new Set(productos.map(p => p.categoria))];
    res.render('admin/dashboard', { productos, categorias });
}

module.exports = { signin, dashboard }