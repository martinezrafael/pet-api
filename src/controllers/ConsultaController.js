const Controller = require("./Controller.js");
const ConsultaServices = require("../services/ConsultaService.js");

const consultaServices = new ConsultaServices();

class ConsultaController extends Controller {
  constructor() {
    super(consultaServices);
  }
}

module.exports = ConsultaController;
