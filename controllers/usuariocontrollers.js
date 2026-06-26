const { Usuario } = require('../models');

const getAll = async (req,res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
}

const create = async (req,res) => {
    console.log(req.body);
    const usuarios = await Usuario.create(req.body);
    res.status(201).json("Usuario creado exitosamente")
}

const update = async (req,res) => {
    const datosnuevos = req.body;
    const { id } = req.params;
    const usuario = await Usuario.update(
        datosnuevos,
        {
            where: { id }
        }
    )
    res.status(200).json("Usuario actualizado exitosamente!")
    ;
}
const getone = async (req,res) => {
    const { id } = req.params;
    const usuario = await Usuario.findOne({where: {id}})
    res.status(200).json(usuario)
}
const destroyone = async (req,res) => {
    const { id } = req.params;
    await Usuario.destroy({ where: { id }});
    res.status(200).json("Usuario eliminado exitosamente")
}
module.exports = { getAll, create, update, getone, destroyone};