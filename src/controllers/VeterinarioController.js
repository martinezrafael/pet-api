const Controller = require("./Controller.js");
const VeterinarioServices = require("../services/VeterinarioService.js");

const veterinarioServices = new VeterinarioServices();

class VeterinarioController extends Controller {
  constructor() {
    super(veterinarioServices);
  }
  async getConsultasRealizadas(req, res) {
    const { id } = req.params;
    try {
      const listaConsultasRealizadas =
        await veterinarioServices.getConsultasRealizadasById(Number(id));
      return res.status(200).json(listaConsultasRealizadas);
    } catch (error) {
      console.log({ message: error.message });
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

module.exports = VeterinarioController;
