const { Router } = require('express');
const { Usuario } = require('../models');
const { getAll, create, update, getone, destroyone } = require('../controllers/usuariocontrollers');

const router = Router();

router.get("/", getAll)
router.post("/", create)
router.put("/:id", update)
router.get("/:id", getone)
router.delete("/:id" , destroyone)
module.exports = router;