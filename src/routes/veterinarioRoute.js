const { Router } = require("express");
const VeterinarioController = require("../controllers/VeterinarioController.js");

const veterinarioController = new VeterinarioController();

const router = Router();

router.get("/todos-os-veterinarios", (req, res) =>
  veterinarioController.getAll(req, res),
);

router.put("/atualiza-veterinario/:id", (req, res) =>
  veterinarioController.updateById(req, res),
);

module.exports = router;
