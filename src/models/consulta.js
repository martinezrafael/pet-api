"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    static associate(models) {}
  }
  Consulta.init(
    {
      consulta_nome: DataTypes.STRING,
      consulta_descricao: DataTypes.STRING,
      consulta_parecer: DataTypes.STRING,
      consulta_data: DataTypes.DATE,
      consulta_horario: DataTypes.DATE,
      consulta_status: DataTypes.BOOLEAN,
      consulta_preco: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Consulta",
      tableName: "consultas",
    },
  );
  return Consulta;
};
