"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "veterinario_servicos",
      [
        {
          veterinario_id: 1,
          servico_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          veterinario_id: 2,
          servico_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          veterinario_id: 3,
          servico_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
