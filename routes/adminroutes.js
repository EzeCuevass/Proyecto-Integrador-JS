const { Router } = require('express')
const { signin, dashboard, showForm, createProduct, updateProduct, toggleStatus, logout } = require('../controllers/admincontrollers')
const { login } = require("../controllers/usuariocontrollers")
const { getAll, destroyone, getone } = require('../controllers/productocontrollers')
const authadmin = require("../middlewares/authadmin")
const validarProducto  = require("../middlewares/validar")
const upload = require('../middlewares/upload')
const router = Router();
// Vista login
router.get("/login", signin)
// Login
router.post("/login", login)
// Vista dashboard
router.get("/dashboard", authadmin, dashboard)
// Vista formulario producto nuevo
router.get("/productos/nuevo", authadmin, showForm)
// Agregar producto nuevo
router.post("/productos/nuevo", authadmin, upload.single("imagen"), validarProducto, createProduct)
// Vista formulario actualizar
router.get("/productos/:id/editar", authadmin, showForm)
// Actualizar producto
router.post("/productos/:id/editar", authadmin, upload.single("imagen"), validarProducto, updateProduct)
// Desactivar producto
router.post("/productos/:id/eliminar", authadmin, toggleStatus)
// Activar producto
router.post("/productos/:id/activar", authadmin, toggleStatus)
// Logout
router.post("/logout", logout)

module.exports = router