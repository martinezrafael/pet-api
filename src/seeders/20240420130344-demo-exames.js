"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "exames",
      [
        {
          exame_nome: "Exame de Sangue",
          exame_descricao:
            "Análise do sangue para verificar os níveis de células sanguíneas e função orgânica",
          exame_resultado:
            "Os resultados do exame mostram níveis normais de hemoglobina e plaquetas",
          exame_data: new Date("2024-04-22"),
          exame_horario: new Date("2024-04-22T08:00:00Z"),
          exame_status: true,
          exame_preco: 120.0,
          veterinario_id: 1,
          pet_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exame_nome: "Radiografia",
          exame_descricao:
            "Realização de radiografia para verificar possíveis lesões ósseas ou problemas internos",
          exame_resultado:
            "A radiografia mostra uma fratura na perna esquerda, que precisa de imobilização",
          exame_data: new Date("2024-05-10"),
          exame_horario: new Date("2024-05-10T10:30:00Z"),
          exame_status: true,
          exame_preco: 180.0,
          veterinario_id: 2,
          pet_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          exame_nome: "Ultrassonografia Abdominal",
          exame_descricao:
            "Realização de ultrassonografia para avaliar órgãos abdominais e identificar possíveis problemas",
          exame_resultado:
            "O exame identificou a presença de cálculos renais, recomendando tratamento específico",
          exame_data: new Date("2024-04-25"),
          exame_horario: new Date("2024-04-25T13:00:00Z"),
          exame_status: true,
          exame_preco: 200.5,
          veterinario_id: 3,
          pet_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("exames", null, {});
  },
};
