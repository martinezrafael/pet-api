"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
      Pet.belongsTo(models.Tutor, {
        foreignKey: "tutor_id",
      });
      Pet.hasMany(models.Consulta, {
        foreignKey: "pet_id",
      });
      Pet.hasMany(models.Exame, {
        foreignKey: "pet_id",
      });
    }
  }
  Pet.init(
    {
      pet_nome: DataTypes.STRING,
      pet_raca: DataTypes.STRING,
      pet_peso: DataTypes.FLOAT,
      pet_foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pet",
      tableName: "pets",
    },
  );
  return Pet;
};
