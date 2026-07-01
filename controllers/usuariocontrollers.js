const { Usuario } = require('../models');
const bcrypt = require('bcrypt'); 


const getAll = async (req,res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
}
// Crear usuario con bcrypt
const create = async (req,res) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    const datosuser = {
        ...req.body,
        password: hash
    }
    const usuarios = await Usuario.create(datosuser);
    res.status(201).json("Usuario creado exitosamente")
}
// Actualizar usuario OJO ACA METER BCRYPT
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
// Login
// Des-hasheo con bcrypt
const login = async (req,res) => {
    const datosuser = req.body;
    const datosdb = await Usuario.findOne({where : {email: req.body.email}})
    if (!datosdb){
        return res.render("admin/login", { error: "No se encontró ningún usuario con ese email" })
    }
    const match = await bcrypt.compare(req.body.password, datosdb.password)
    if(match){
        req.session.usuarioId = datosdb.id;
        req.session.es_admin = datosdb.es_admin;
        res.redirect("/admin/dashboard")
    }else{
        res.render("admin/login", { error: "Contraseña incorrecta" })
    }
}

module.exports = { getAll, create, update, getone, destroyone, login };