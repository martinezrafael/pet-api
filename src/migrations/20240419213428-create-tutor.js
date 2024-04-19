"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tutores", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tutor_nome: {
        type: Sequelize.STRING,
      },
      tutor_sobrenome: {
        type: Sequelize.STRING,
      },
      tutor_cpf: {
        type: Sequelize.STRING,
      },
      tutor_foto: {
        type: Sequelize.STRING,
      },
      tutor_telefone1: {
        type: Sequelize.STRING,
      },
      tutor_telefone2: {
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
      tutor_email: {
        type: Sequelize.STRING,
      },
      tutor_password: {
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
    await queryInterface.dropTable("Tutores");
  },
};
