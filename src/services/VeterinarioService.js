const Services = require("./Services.js");

class VeterinarioServices extends Services {
  constructor() {
    super("Veterinario");
  }
  async getConsultasRealizadasById(id) {
    const veterinario = await super.getById(id);
    const listaConsultasRealizadas = await veterinario.ConsultasRealizadas;
    return listaConsultasRealizadas;
  }
}

module.exports = VeterinarioServices;
