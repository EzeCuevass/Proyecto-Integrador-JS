// Importaciones
const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const ejs = require('ejs');
// import express from "express"
// const app = express();
// import "dotenv/config"
const { Usuario, Producto, VentaProducto, Venta } = require('./models')
// Base de Datos
const sequelize = require('./db')
// Puerto en el cual corre el servidor
const PORT = 8080;

// Express configurado para recibir JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configuracion para sesiones
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000*60
    }
}))
// Configuracion para vistas EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Rutas
app.use('/usuarios', require('./routes/usuarioroutes'))
app.use('/productos', require('./routes/productoroutes'))
app.use('/ventas', require('./routes/ventaroutes'))
app.use('/venta_prod', require('./routes/venta_prodroutes'))
app.use('/admin', require('./routes/adminroutes'))


// Carpetas estaticas
app.use("/uploads", express.static("uploads"));
app.use(express.static("public"));
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
