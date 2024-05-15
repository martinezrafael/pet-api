"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "consultas",
      [
        {
          consulta_nome: "Consulta de Rotina",
          consulta_descricao:
            "Exame de rotina para verificar a saúde do animal de estimação",
          consulta_parecer: "O animal está saudável e em boas condições",
          consulta_data: new Date("2024-04-22"),
          consulta_horario: new Date("2024-04-22T10:00:00Z"),
          consulta_status: true,
          consulta_preco: 80.5,
          veterinario_id: 1,
          pet_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consulta_nome: "Vacinação Anual",
          consulta_descricao:
            "Administração das vacinas anuais para proteger o animal contra doenças",
          consulta_parecer:
            "O animal recebeu todas as vacinas necessárias e está protegido",
          consulta_data: new Date("2024-05-10"),
          consulta_horario: new Date("2024-05-10T15:30:00Z"),
          consulta_status: true,
          consulta_preco: 120.0,
          veterinario_id: 2,
          pet_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          consulta_nome: "Tratamento de Ferimento",
          consulta_descricao:
            "Tratamento de ferimento na pata do animal causado por acidente",
          consulta_parecer:
            "O ferimento foi limpo e tratado, e o animal está se recuperando bem",
          consulta_data: new Date("2024-04-25"),
          consulta_horario: new Date("2024-04-25T14:00:00Z"),
          consulta_status: true,
          consulta_preco: 150.75,
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
    await queryInterface.bulkDelete("consultas", null, {});
  },
};
