"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Servico extends Model {
    static associate(models) {
      Servico.belongsToMany(models.Veterinario, {
        through: "VeterinarioServico",
        foreignKey: "servico_id",
      });
    }
  }
  Servico.init(
    {
      servico_nome: DataTypes.STRING,
      servico_descricao: DataTypes.STRING,
      servico_foto: DataTypes.STRING,
      servico_preco: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Servico",
      tableName: "servicos",
    },
  );
  return Servico;
};
