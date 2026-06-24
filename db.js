const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging:false
});
module.exports = sequelize;