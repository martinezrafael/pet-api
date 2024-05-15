const { Router } = require("express");
const VeterinarioController = require("../controllers/VeterinarioController.js");
const VeterinarioServicoController = require("../controllers/VeterinarioServicoController.js");

const veterinarioController = new VeterinarioController();
const veterinarioServicoController = new VeterinarioServicoController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/veterinario/todos`, (req, res) =>
  veterinarioController.getAll(req, res),
);

router.get(
  `${versioningPrefix}/veterinario/id/:id/consultas_realizadas`,
  (req, res) => veterinarioController.getConsultasRealizadas(req, res),
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

router.post(`${versioningPrefix}/veterinario/id/:id/servico`, (req, res) =>
  veterinarioServicoController.create(req, res),
);

module.exports = router;
