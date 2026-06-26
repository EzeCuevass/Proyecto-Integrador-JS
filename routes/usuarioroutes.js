const { Router } = require('express');
const { Usuario } = require('../models')
const router = Router();

router.get("/", async (req,res) =>{
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
})

module.exports = router;