const { Router } = require("express");
const VeterinarioController = require("../controllers/VeterinarioController.js");

const router = Router();

router.get("/todos-os-veterinarios", VeterinarioController.GetVeterinarios);

module.exports = router;
