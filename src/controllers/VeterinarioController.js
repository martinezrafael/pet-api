const Controller = require("./Controller.js");
const VeterinarioServices = require("../services/VeterinarioServices.js");

const veterinarioServices = new VeterinarioServices();

class VeterinarioController extends Controller {
  constructor() {
    super(veterinarioServices);
  }
}

module.exports = VeterinarioController;
