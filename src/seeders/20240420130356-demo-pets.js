"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pets",
      [
        {
          pet_nome: "Bolinha",
          pet_raca: "Golden Retriever",
          pet_peso: 25.5,
          pet_foto: "bolinha.jpg",
          tutor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pet_nome: "Mel",
          pet_raca: "Siamês",
          pet_peso: 4.2,
          pet_foto: "mel.jpg",
          tutor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          pet_nome: "Thor",
          pet_raca: "Bulldog Francês",
          pet_peso: 12.8,
          pet_foto: "thor.jpg",
          tutor_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("pets", null, {});
  },
};
