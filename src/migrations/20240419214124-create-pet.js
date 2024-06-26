"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pet_nome: {
        type: Sequelize.STRING,
      },
      pet_raca: {
        type: Sequelize.STRING,
      },
      pet_peso: {
        type: Sequelize.FLOAT,
      },
      pet_foto: {
        type: Sequelize.STRING,
      },
      tutor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tutores",
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
    await queryInterface.dropTable("pets");
  },
};
