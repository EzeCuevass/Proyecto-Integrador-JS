const express = require('express')
const app = express();
const PORT = 8080;
require('dotenv').config();
const sequelize = require('./db')
const {Usuario, Producto, VentaProducto, Venta} = require('./models')

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/usuarios', require('./routes/usuarioroutes'))
app.use('/productos', require('./routes/productoroutes'))
app.use('/ventas', require('./routes/ventaroutes'))
app.use('/venta_prod', require('./routes/venta_prodroutes'))
app.listen(PORT, async ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
    try{
        await sequelize.authenticate();
        console.log("La conexion se establecio exitosamente");
    }catch(error){
        console.log(error);
    }
})
