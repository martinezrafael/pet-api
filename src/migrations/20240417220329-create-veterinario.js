"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("veterinarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      veterinario_nome: {
        type: Sequelize.STRING,
      },
      veterinario_sobrenome: {
        type: Sequelize.STRING,
      },
      veterinario_cpf: {
        type: Sequelize.STRING,
      },
      veterinario_crmv: {
        type: Sequelize.STRING,
      },
      veterinario_foto: {
        type: Sequelize.STRING,
      },
      veterinario_telefone1: {
        type: Sequelize.STRING,
      },
      veterinario_telefone2: {
        type: Sequelize.STRING,
      },
      endereco_rua: {
        type: Sequelize.STRING,
      },
      endereco_numero: {
        type: Sequelize.INTEGER,
      },
      endereco_complemento: {
        type: Sequelize.STRING,
      },
      endereco_bairro: {
        type: Sequelize.STRING,
      },
      endereco_cidade: {
        type: Sequelize.STRING,
      },
      endereco_estado: {
        type: Sequelize.STRING,
      },
      endereco_cep: {
        type: Sequelize.STRING,
      },
      veterinario_email: {
        type: Sequelize.STRING,
      },
      veterinario_password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("veterinarios");
  },
};
