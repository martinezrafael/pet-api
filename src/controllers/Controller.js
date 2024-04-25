class Controller {
  constructor(servicesEntitie) {
    this.servicesEntitie = servicesEntitie;
  }

  //cria um novo
  async createNew(req, res) {
    const data = req.body;
    try {
      const newRegister = await this.servicesEntitie.createNewRegister(data);
      return res.status(200).json(newRegister);
    } catch (error) {
      console.error({
        message: `Ops, algo de errado aconteceu ${error.message}`,
      });
    }
  }

  //busca todos
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

  //busca um por pk
  async findOneByPk(req, res) {
    const { id } = req.params;
    try {
      const registerByPk = await this.servicesEntitie.getOneRegisterByPk(
        Number(id),
      );
      if (!registerByPk) {
        return res.status(400).json({ message: `Não conseguimos localizar` });
      }
      return res.status(200).json(registerByPk);
    } catch (error) {
      console.error({
        message: `Ops, algo de errado aconteceu ${error.message}`,
      });
    }
  }

  //atualiza um por id
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

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const isDeleted = await this.servicesEntitie.deleteRegister(Number(id));
      if (!isDeleted) {
        return res.status(400).json({ message: `Não foi possível deletar` });
      }
      return res.status(200).json({ message: `Deletado com sucesso!` });
    } catch (error) {
      console.error({
        message: `Ops, algo de errado aconteceu ${error.message}`,
      });
    }
  }
}

module.exports = Controller;
