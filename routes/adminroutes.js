const { Router } = require('express')
const { view, nuevo, editar } = require('../controllers/admincontrollers')
const { login } = require("../controllers/usuariocontrollers")
const { getAll, create, destroyone, getone, update } = require('../controllers/productocontrollers')
const authadmin = require("../middlewares")
const upload = require('../middlewares/upload')
const router = Router();
router.post("/login", login)
router.get("/adminpanel",authadmin,view)
router.get("/productos/nuevo", authadmin, nuevo)
router.post("/productos/crear", authadmin,upload.single("imagen"), create)
router.get("productos/editar", authadmin, editar)
router.put("/productos/:id", authadmin,upload.single("imagen"), update)
router.delete("/productos/:id", authadmin,destroyone)


module.exports = router