"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tutores", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tutores", null, {});
  },
};
