const Controller = require("./Controller.js");
const ServicoServices = require("../services/ConsultaService.js");

const servicoServices = new ServicoServices();

class ServicoController extends Controller {
  constructor() {
    super(servicoServices);
  }
}

module.exports = ServicoController;
