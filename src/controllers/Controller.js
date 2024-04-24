class Controller {
  constructor(servicesEntitie) {
    this.servicesEntitie = servicesEntitie;
  }

  async getAll(req, res) {
    try {
      const allRegisters = await this.servicesEntitie.getAllRegisters();
      return res.status(200).json(allRegisters);
    } catch (error) {
      console.error({
        message: `Ops, algo de errado aconteceu ${error.message}`,
      });
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      const isUpdated = await this.servicesEntitie.updateRegisterById(
        newData,
        Number(id),
      );
      if (!isUpdated) {
        return res.status(400).json({ message: `Não conseguimos atualizar` });
      }
      return res.status(200).json({ message: `Atualizado com sucesso!` });
    } catch (error) {
      console.error({
        message: `Ops, algo de errado aconteceu ${error.message}`,
      });
    }
  }
}

module.exports = Controller;
