const { Router } = require('express');
const { Venta } = require('../models')
const router = Router();

router.get("/", async (req,res) =>{
    const ventas = await Venta.findAll();
    res.status(200).json(ventas);
})

module.exports = router;