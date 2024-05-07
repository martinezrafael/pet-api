const { Router } = require("express");
const ConsultaController = require("../controllers/ConsultaController.js");

const consultaController = new ConsultaController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/consulta/todos`, (req, res) =>
  consultaController.getAll(req, res),
);

router.post(`${versioningPrefix}/consulta/cadastrar`, (req, res) =>
  consultaController.create(req, res),
);

router.get(`${versioningPrefix}/consulta/id/:id`, (req, res) =>
  consultaController.getById(req, res),
);

router.put(`${versioningPrefix}/consulta/editar/:id`, (req, res) =>
  consultaController.updateById(req, res),
);

router.delete(`${versioningPrefix}/consulta/excluir/:id`, (req, res) =>
  consultaController.deleteById(req, res),
);

module.exports = router;
