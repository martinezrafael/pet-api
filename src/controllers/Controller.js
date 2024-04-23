class Controller {
  constructor(servicesEntitie) {
    this.servicesEntitie = servicesEntitie;
  }

  async getAll(req, res) {
    try {
      const allRegisters = await this.servicesEntitie.getAllRegisters();
      return res.status(200).json(allRegisters);
    } catch (error) {}
  }
}

module.exports = Controller;
