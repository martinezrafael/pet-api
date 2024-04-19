"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exame extends Model {
    static associate(models) {}
  }
  Exame.init(
    {
      exame_nome: DataTypes.STRING,
      exame_descricao: DataTypes.STRING,
      exame_resultado: DataTypes.STRING,
      exame_data: DataTypes.DATE,
      exame_horario: DataTypes.DATE,
      exame_status: DataTypes.BOOLEAN,
      exame_preco: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Exame",
      tableName: "exames",
    },
  );
  return Exame;
};
