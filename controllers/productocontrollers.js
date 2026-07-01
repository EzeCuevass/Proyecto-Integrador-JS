const { Producto } = require('../models');
// Get All con paginacion y filtro de activos
const getAll = async (req,res) => {
    const pagina = parseInt(req.query.page) || 1;
    const limite = parseInt(req.query.limit) || 9;
    const offset = (pagina - 1) * limite;

    const {count  : total, rows: productos} = await Producto.findAndCountAll({
        where: {activo : 1},
        limit: limite,
        offset: offset
    })
    res.json({
        productos,
        total,
        pagina,
        totalPaginas: Math.ceil(total / limite)
    })
}

// Get One Producte
const getone = async (req,res) => {
    const { id } = req.params;
    const producto = await Producto.findOne({where: {id}})
    res.status(200).json(producto)
}

module.exports = { getAll, getone };