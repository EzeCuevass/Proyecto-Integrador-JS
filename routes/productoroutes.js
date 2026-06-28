const { Router } = require('express');
const { getAll, create, destroyone, getone, update } = require('../controllers/productocontrollers')
const router = Router();
const  upload  = require('../middlewares/upload') 
router.get("/",getAll)
router.get("/:id", getone)


module.exports = router;