const { Router } = require("express");
const TutorController = require("../controllers/TutorController");

const tutorController = new TutorController();

const router = Router();

const versioningPrefix = process.env.VERSIONING_PREFIX;

router.get(`${versioningPrefix}/tutor/todos`, (req, res) =>
  tutorController.getAll(req, res),
);

module.exports = router;
