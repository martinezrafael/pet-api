"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("consultas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      consulta_nome: {
        type: Sequelize.STRING,
      },
      consulta_descricao: {
        type: Sequelize.STRING,
      },
      consulta_parecer: {
        type: Sequelize.STRING,
      },
      consulta_data: {
        type: Sequelize.DATE,
      },
      consulta_horario: {
        type: Sequelize.DATE,
      },
      consulta_status: {
        type: Sequelize.BOOLEAN,
      },
      consulta_preco: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("consultas");
  },
};
