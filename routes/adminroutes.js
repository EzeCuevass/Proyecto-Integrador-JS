const { Router } = require('router')
const { view } = require('../controllers/admincontrollers')
const { login } = require("../controllers/usuariocontrollers")
const { getAll, create, destroyone, getone, update } = require('../controllers/productocontrollers')
const authadmin = require("../middlewares")
const upload = require('../middlewares/upload')
const router = Router();
router.post("/login", login)
router.get("/adminpanel",authadmin,view)
router.post("/productos/crear", authadmin,upload.single("imagen"), create)
router.put("/productos/:id", authadmin,upload.single("imagen"), update)
router.delete("/productos/:id", authadmin,destroyone)


module.exports = router