const { Router } = require("express");
const VeterinarioController = require("../controllers/VeterinarioController.js");

const veterinarioController = new VeterinarioController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/veterinario/todos`, (req, res) =>
  veterinarioController.getAll(req, res),
);

router.post(`${versioningPrefix}/veterinario/cadastrar`, (req, res) =>
  veterinarioController.create(req, res),
);

router.get(`${versioningPrefix}/veterinario/id/:id`, (req, res) =>
  veterinarioController.getById(req, res),
);

router.put(`${versioningPrefix}/veterinario/editar/:id`, (req, res) =>
  veterinarioController.updateById(req, res),
);

router.delete(`${versioningPrefix}/veterinario/excluir/:id`, (req, res) => {
  veterinarioController.deleteById(req, res);
});

module.exports = router;
