const { Router } = require('express');
const { getAll, create, destroyone, getone, update } = require('../controllers/productocontrollers')
const router = Router();

router.get("/",getAll)
router.get("/:id", getone)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", destroyone)

module.exports = router;