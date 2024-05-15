"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("veterinario_servicos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      veterinario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "veterinarios", key: "id" },
      },
      servico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "servicos", key: "id" },
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
    await queryInterface.dropTable("veterinario_servicos");
  },
};
