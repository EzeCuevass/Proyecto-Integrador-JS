// Importaciones
const express = require('express')
const app = express();
require('dotenv').config();
// import express from "express"
// const app = express();
// import "dotenv/config"
const { Usuario, Producto, VentaProducto, Venta } = require('./models')
// Base de Datos
const sequelize = require('./db')
// Puerto en el cual corre el servidor
const PORT = 8080;

// Express configurado para recibir JSON
app.use(express.json());

// Rutas
app.use('/usuarios', require('./routes/usuarioroutes'))
app.use('/productos', require('./routes/productoroutes'))
app.use('/ventas', require('./routes/ventaroutes'))
app.use('/venta_prod', require('./routes/venta_prodroutes'))

// Servidor andando 

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Cada vez que arranca el servidor, escucha el puerto
app.listen(PORT, async ()=>{
    // Imprime el mensaje en consola
    console.log(`Servidor corriendo en puerto ${PORT}`);
    try{
        // Se conecta a la base de datos
        await sequelize.authenticate();
        console.log("La conexion se establecio exitosamente");
    }catch(error){
        console.log(error);
    }
})
