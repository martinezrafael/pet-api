"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exame extends Model {
    static associate(models) {
      Exame.belongsTo(models.Pet, {
        foreignKey: "pet_id",
      });
      Exame.belongsTo(models.Veterinario, {
        foreignKey: "veterinario_id",
      });
    }
  }
  Exame.init(
    {
      exame_nome: DataTypes.STRING,
      exame_descricao: DataTypes.STRING,
      exame_resultado: DataTypes.STRING,
      exame_data: {
        type: DataTypes.DATE,
        get() {
          return new Date(this.getDataValue("exame_data") + "+0000");
        },
      },
      exame_horario: {
        type: DataTypes.TIME,
        get() {
          return new Date(this.getDataValue("exame_horario") + "+0000");
        },
      },
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
