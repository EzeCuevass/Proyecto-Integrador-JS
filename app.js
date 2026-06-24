const express = require('express')
const app = express();
const PORT = 8080;
require('dotenv').config();
const sequelize = require('./db')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, async ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
    try{
        await sequelize.authenticate();
        console.log("La conexion se establecio exitosamente");
    }catch(error){
        console.log(error);
    }
})
