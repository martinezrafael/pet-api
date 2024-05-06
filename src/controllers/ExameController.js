const Controller = require("./Controller.js");
const ExameServices = require("../services/ExameService.js");

const exameServices = new ExameServices();

class ExameController extends Controller {
  constructor() {
    super(exameServices);
  }
}

module.exports = ExameController;
