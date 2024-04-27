const Controller = require("./Controller.js");
const TutorServices = require("../services/TutorService.js");

const tutorServices = new TutorServices();

class TutorController extends Controller {
  constructor() {
    super(tutorServices);
  }
}

module.exports = TutorController;
