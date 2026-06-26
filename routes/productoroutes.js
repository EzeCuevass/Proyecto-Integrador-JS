const { Router } = require('express');
const { Producto } = require('../models')
const router = Router();

router.get("/", async (req,res) =>{
    const productos = await Producto.findAll();
    res.status(200).json(productos);
})

module.exports = router;