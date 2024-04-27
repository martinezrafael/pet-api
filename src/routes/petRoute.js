const { Router } = require("express");
const PetController = require("../controllers/PetController.js");

const petController = new PetController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/pet/todos`, (req, res) =>
  petController.getAll(req, res),
);

router.post(`${versioningPrefix}/pet/cadastrar`, (req, res) =>
  petController.createNew(req, res),
);

router.get(`${versioningPrefix}/pet/id/:id`, (req, res) =>
  petController.findOneByPk(req, res),
);

router.put(`${versioningPrefix}/pet/editar/:id`, (req, res) =>
  petController.updateById(req, res),
);

router.delete(`${versioningPrefix}/pet/excluir/:id`, (req, res) =>
  petController.deleteById(req, res),
);

module.exports = router;
