"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class VeterinarioServico extends Model {
    static associate(models) {}
  }

  VeterinarioServico.init(
    {
      veterinario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "veterinarios",
          key: "id",
        },
      },
      servico_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "servicos",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "VeterinarioServico",
      tableName: "veterinario_servicos",
    },
  );

  return VeterinarioServico;
};
