const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async create(data) {
    return dataSource[this.model].create(data);
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async updateById(newData, id) {
    const updatedList = await dataSource[this.model].update(newData, {
      where: { id: id },
    });
    if (updatedList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteById(id) {
    const deletedRegister = await dataSource[this.model].destroy({
      where: {
        id: id,
      },
    });
    return deletedRegister !== 0;
  }
}
module.exports = Services;
