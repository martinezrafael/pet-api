"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Veterinario extends Model {
    static associate(models) {}
  }
  Veterinario.init(
    {
      veterinario_nome: DataTypes.STRING,
      veterinario_sobrenome: DataTypes.STRING,
      veterinario_cpf: DataTypes.STRING,
      veterinario_crmv: DataTypes.STRING,
      veterinario_foto: DataTypes.STRING,
      veterinario_telefone1: DataTypes.STRING,
      veterinario_telefone2: DataTypes.STRING,
      endereco_rua: DataTypes.STRING,
      endereco_numero: DataTypes.INTEGER,
      endereco_complemento: DataTypes.STRING,
      endereco_bairro: DataTypes.STRING,
      endereco_cidade: DataTypes.STRING,
      endereco_estado: DataTypes.STRING,
      endereco_cep: DataTypes.STRING,
      veterinario_email: DataTypes.STRING,
      veterinario_password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Veterinario",
      tableName: "veterinarios",
    },
  );
  return Veterinario;
};
