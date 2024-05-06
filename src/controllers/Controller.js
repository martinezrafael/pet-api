class Controller {
  constructor(servicesEntitie) {
    this.servicesEntitie = servicesEntitie;
  }

  async getAll(req, res) {
    try {
      const all = await this.servicesEntitie.getAll();
      return res.status(200).json(all);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const payload = req.body;
    try {
      const created = await this.servicesEntitie.create(payload);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const response = await this.servicesEntitie.getById(Number(id));
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    const payload = req.body;
    const { id } = req.params;

    try {
      const isUpdated = await this.servicesEntitie.updateById(
        payload,
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
      const deleted = await this.servicesEntitie.deleteById(Number(id));
      return res.status(204).json({ message: "Deletado com Sucesso!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
