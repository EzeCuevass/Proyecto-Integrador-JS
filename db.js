// ORM 
const { Sequelize } = require('sequelize');
// Configuracion Sequelize (Nombre BBDD, Username BBDD, Pass BBDD)
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging:false
    }
);
// Exportacion para usar en App.js
module.exports = sequelize;