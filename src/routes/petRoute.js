const { Router } = require("express");
const PetController = require("../controllers/PetController.js");

const petController = new PetController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/pet/todos`, (req, res) =>
  petController.getAll(req, res),
);

module.exports = router;
