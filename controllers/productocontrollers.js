const { Producto } = require('../models');

const getAll = async (req,res) => {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
}

const create = async (req,res) => {
    const data = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria,
        imagen: req.file ? req.file.filename : null
    };
    const producto = await Producto.create(data);
    res.status(201).json("Producto creado exitosamente")
}

const update = async (req,res) => {
    const datosnuevos = {
        ...req.body,
        imagen: req.file ? req.file.filename : null
    }
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