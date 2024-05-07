const { Router } = require("express");
const ExameController = require("../controllers/ExameController.js");

const exameController = new ExameController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/exame/todos`, (req, res) =>
  exameController.getAll(req, res),
);

router.post(`${versioningPrefix}/exame/cadastrar`, (req, res) =>
  exameController.create(req, res),
);

router.get(`${versioningPrefix}/exame/id/:id`, (req, res) =>
  exameController.getById(req, res),
);

router.put(`${versioningPrefix}/exame/editar/:id`, (req, res) =>
  exameController.updateById(req, res),
);

router.delete(`${versioningPrefix}/exame/excluir/:id`, (req, res) =>
  exameController.deleteById(req, res),
);

module.exports = router;
