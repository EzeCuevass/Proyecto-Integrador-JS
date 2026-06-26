const { DataTypes } = require('sequelize');
const sequelize = require('../db')

const Usuario = sequelize.define("Usuario", {
    id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nombre: {type: DataTypes.STRING(100), allowNull: false},
    email: {type: DataTypes.STRING(150), allowNull: false},
    password: {type: DataTypes.STRING(255), allowNull:false},
    es_admin: {type: DataTypes.TINYINT, defaultValue:0}
}, {
    tableName: "usuarios",
    timestamps: false
}
)
module.exports = Usuario;