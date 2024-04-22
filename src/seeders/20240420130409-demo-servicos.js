"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "servicos",
      [
        {
          servico_nome: "Banho e Tosa",
          servico_descricao:
            "Banho completo seguido de tosa higiênica, corte de unhas e limpeza de ouvidos",
          servico_foto: "banho_tosa.jpg",
          servico_preco: 80.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          servico_nome: "Hospedagem",
          servico_descricao:
            "Hospedagem confortável para o pet com alimentação balanceada e espaço para brincadeiras",
          servico_foto: "hospedagem.jpg",
          servico_preco: 50.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          servico_nome: "Treinamento Comportamental",
          servico_descricao:
            "Treinamento personalizado para corrigir comportamentos indesejados e promover obediência",
          servico_foto: "treinamento.jpg",
          servico_preco: 100.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("servicos", null, {});
  },
};
