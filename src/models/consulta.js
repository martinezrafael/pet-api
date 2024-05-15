"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    static associate(models) {
      Consulta.belongsTo(models.Pet, {
        foreignKey: "pet_id",
        targetKey: "id",
      });
      Consulta.belongsTo(models.Veterinario, {
        foreignKey: "veterinario_id",
        targetKey: "id",
      });
    }
  }
  Consulta.init(
    {
      consulta_nome: DataTypes.STRING,
      consulta_descricao: DataTypes.STRING,
      consulta_parecer: DataTypes.STRING,
      consulta_data: {
        type: DataTypes.DATE,
        get() {
          return new Date(this.getDataValue("consulta_data") + "+0000");
        },
      },
      consulta_horario: {
        type: DataTypes.TIME,
        get() {
          return new Date(this.getDataValue("consulta_horario") + "+0000");
        },
      },
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
