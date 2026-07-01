const { Venta, Producto, VentaProducto } = require('../models');

const getAll = async (req,res) => {
    const ventas = await Venta.findAll({
        include: [{
            model: Producto,
            through: { attributes: ["cantidad"]}
        }]
    });
    res.status(200).json(ventas);
}

const create = async (req,res) => {
    const { usuario_id , productos } = req.body
    let precio_total = 0;
    for (const p of productos) {
        const producto = await Producto.findByPk(p.id_producto);
        precio_total += producto.precio * p.cantidad;
    }
    const venta = await Venta.create({usuario_id, precio_total});

    for (const p of productos) {
        await VentaProducto.create({
            id_venta: venta.id,
            id_producto: p.id_producto,
            cantidad: p.cantidad
        });
    }

    res.status(201).json(venta)
}

const update = async (req,res) => {
    const datosnuevos = req.body;
    const { id } = req.params;
    const venta = await Venta.update(
        datosnuevos,
        {
            where: { id }
        }
    )
    res.status(200).json("Venta actualizada exitosamente!")
    ;
}
const getone = async (req,res) => {
    const { id } = req.params;
    const venta = await Venta.findOne({
        where: {id},
        include: [{
            model: Producto,
            through: { attributes: ["cantidad"]}
        }]
    })
    res.status(200).json(venta)
}
const destroyone = async (req,res) => {
    const { id } = req.params;
    await Venta.destroy({ where: { id }});
    res.status(200).json("Venta eliminada exitosamente")
}
module.exports = { getAll, create, update, getone, destroyone};