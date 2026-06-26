const { Router } = require('express');
const { VentaProducto } = require('../models')
const router = Router();

router.get("/", async (req,res) =>{
    const venta_prod = await VentaProducto.findAll();
    res.status(200).json(venta_prod);
})

module.exports = router;