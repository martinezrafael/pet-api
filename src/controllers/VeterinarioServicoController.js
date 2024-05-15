const Controller = require("./Controller.js");
const VeterinarioServicoServices = require("../services/VeterinarioServicoService.js");

class VeterinarioServicoController extends Controller {
  constructor() {
    const veterinarioServicoServices = new VeterinarioServicoServices();
    super(veterinarioServicoServices);
  }
}

module.exports = VeterinarioServicoController;
