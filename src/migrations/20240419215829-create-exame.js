"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("exames", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exame_nome: {
        type: Sequelize.STRING,
      },
      exame_descricao: {
        type: Sequelize.STRING,
      },
      exame_resultado: {
        type: Sequelize.STRING,
      },
      exame_data: {
        type: Sequelize.DATE,
      },
      exame_horario: {
        type: Sequelize.TIME,
      },
      exame_status: {
        type: Sequelize.BOOLEAN,
      },
      exame_preco: {
        type: Sequelize.FLOAT,
      },
      veterinario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "veterinarios",
          key: "id",
        },
      },
      pet_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "pets",
          key: "id",
        },
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
    await queryInterface.dropTable("exames");
  },
};
