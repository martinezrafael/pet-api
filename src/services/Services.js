const { where } = require("sequelize");
const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }
  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async updateRegisterById(newData, id) {
    const updatedRegistersList = dataSource[this.model].update(newData, {
      where: { id: id },
    });
    if (updatedRegistersList[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
