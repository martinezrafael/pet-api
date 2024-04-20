"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("veterinarios", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("veterinarios", null, {});
  },
};
