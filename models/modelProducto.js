const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('../db')

const Producto = sequelize.define("Producto", {
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nombre: {type: DataTypes.STRING(100), allowNull: false},
    imagen: {type: DataTypes.STRING(255), allowNull: false},
    categoria: {type: DataTypes.STRING(100), allowNull:false},
    precio: {type: DataTypes.DECIMAL(10,2), allowNull:false},
    activo: {type: DataTypes.TINYINT, defaultValue:0}
}, {
    tableName: "productos"
}
)
module.exports = Producto;