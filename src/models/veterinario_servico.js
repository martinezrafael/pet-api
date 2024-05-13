"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VeterinarioServico extends Model {
    static associate(models) {}
  }
  VeterinarioServico.init(
    {
      veterinario_id: DataTypes.INTEGER,
      servico_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "VeterinarioServico",
      tableName: "veterinario_servicos",
    },
  );
  return VeterinarioServico;
};
