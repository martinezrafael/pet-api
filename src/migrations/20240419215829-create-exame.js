'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exames', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      exame_nome: {
        type: Sequelize.STRING
      },
      exame_descricao: {
        type: Sequelize.STRING
      },
      exame_resultado: {
        type: Sequelize.STRING
      },
      exame_data: {
        type: Sequelize.DATE
      },
      exame_horario: {
        type: Sequelize.DATE
      },
      exame_status: {
        type: Sequelize.BOOLEAN
      },
      exame_preco: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Exames');
  }
};