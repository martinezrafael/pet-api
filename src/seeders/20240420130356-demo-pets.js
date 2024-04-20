"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pets", [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
