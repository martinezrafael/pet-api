"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("exames", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exames", null, {});
  },
};
