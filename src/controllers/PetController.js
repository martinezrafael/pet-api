const Controller = require("./Controller.js");
const PetServices = require("../services/PetService.js");

const petServices = new PetServices();

class PetController extends Controller {
  constructor() {
    super(petServices);
  }
}

module.exports = PetController;
