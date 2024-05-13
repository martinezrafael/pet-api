"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    static associate(models) {
      Tutor.hasMany(models.Pet, {
        foreignKey: "tutor_id",
      });
    }
  }
  Tutor.init(
    {
      tutor_nome: DataTypes.STRING,
      tutor_sobrenome: DataTypes.STRING,
      tutor_cpf: DataTypes.STRING,
      tutor_foto: DataTypes.STRING,
      tutor_telefone1: DataTypes.STRING,
      tutor_telefone2: DataTypes.STRING,
      endereco_rua: DataTypes.STRING,
      endereco_numero: DataTypes.INTEGER,
      endereco_complemento: DataTypes.STRING,
      endereco_bairro: DataTypes.STRING,
      endereco_cidade: DataTypes.STRING,
      endereco_estado: DataTypes.STRING,
      endereco_cep: DataTypes.STRING,
      tutor_email: DataTypes.STRING,
      tutor_password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tutor",
      tableName: "tutores",
    },
  );
  return Tutor;
};
