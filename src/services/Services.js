const { where } = require("sequelize");
const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async createNewRegister(data) {
    return dataSource[this.model].create(data);
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  //busca pelo crmv
  async getByCrmv(crmvNumber) {
    const resultsByCrmv = await dataSource[this.model].findAll({
      where: {
        veterinario_crmv: crmvNumber,
      },
    });
    return resultsByCrmv;
  }

  async getOneRegisterByPk(id) {
    return dataSource[this.model].findByPk(id);
  }

  async updateRegisterById(newData, id) {
    const updatedRegistersList = await dataSource[this.model].update(newData, {
      where: { id: id },
    });
    if (updatedRegistersList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegister(id) {
    const deletedRegister = await dataSource[this.model].destroy({
      where: {
        id: id,
      },
    });
    return deletedRegister !== 0;
  }
}
module.exports = Services;
