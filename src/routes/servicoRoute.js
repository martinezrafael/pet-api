const { Router } = require("express");
const ServicoController = require("../controllers/ServicoController.js");

const servicoController = new ServicoController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/servico/todos`, (req, res) =>
  servicoController.getAll(req, res),
);

router.post(`${versioningPrefix}/servico/cadastrar`, (req, res) =>
  servicoController.create(req, res),
);

router.get(`${versioningPrefix}/servico/id/:id`, (req, res) =>
  servicoController.getById(req, res),
);

router.put(`${versioningPrefix}/servico/editar/:id`, (req, res) =>
  servicoController.updateById(req, res),
);

router.delete(`${versioningPrefix}/servico/excluir/:id`, (req, res) =>
  servicoController.deleteById(req, res),
);

module.exports = router;
