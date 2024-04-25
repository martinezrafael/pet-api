const { Router } = require("express");
const VeterinarioController = require("../controllers/VeterinarioController.js");

const veterinarioController = new VeterinarioController();

const router = Router();

router.post("/novo-veterinario", (req, res) =>
  veterinarioController.createNew(req, res),
);

router.get("/todos-os-veterinarios", (req, res) =>
  veterinarioController.getAll(req, res),
);

router.get("/veterinario/:id", (req, res) =>
  veterinarioController.findOneByPk(req, res),
);

router.put("/atualiza-veterinario/:id", (req, res) =>
  veterinarioController.updateById(req, res),
);

router.delete("/deleta-veterinario/:id", (req, res) => {
  veterinarioController.deleteById(req, res);
});

module.exports = router;
