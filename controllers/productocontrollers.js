const { Producto } = require('../models');

const getAll = async (req,res) => {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
}

const create = async (req,res) => {
    console.log(req.body);
    const producto = await Producto.create(req.body);
    res.status(201).json("Producto creado exitosamente")
}

const update = async (req,res) => {
    const datosnuevos = req.body;
    const { id } = req.params;
    const producto = await Producto.update(
        datosnuevos,
        {
            where: { id }
        }
    )
    res.status(200).json("Producto actualizado exitosamente!")
    ;
}
const getone = async (req,res) => {
    const { id } = req.params;
    const producto = await Producto.findOne({where: {id}})
    res.status(200).json(producto)
}
const destroyone = async (req,res) => {
    const { id } = req.params;
    await Producto.destroy({ where: { id }});
    res.status(200).json("Producto eliminado exitosamente")
}
module.exports = { getAll, create, update, getone, destroyone};