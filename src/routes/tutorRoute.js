const { Router } = require("express");
const TutorController = require("../controllers/TutorController.js");

const tutorController = new TutorController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/tutor/todos`, (req, res) =>
  tutorController.getAll(req, res),
);

router.post(`${versioningPrefix}/tutor/cadastrar`, (req, res) =>
  tutorController.create(req, res),
);

router.get(`${versioningPrefix}/tutor/id/:id`, (req, res) =>
  tutorController.getById(req, res),
);

router.put(`${versioningPrefix}/tutor/editar/:id`, (req, res) =>
  tutorController.updateById(req, res),
);

router.delete(`${versioningPrefix}/tutor/excluir/:id`, (req, res) =>
  tutorController.deleteById(req, res),
);

module.exports = router;
