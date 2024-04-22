"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "veterinarios",
      [
        {
          veterinario_nome: "João",
          veterinario_sobrenome: "Silveira",
          veterinario_cpf: "987.654.321-00",
          veterinario_crmv: "RJ54321",
          veterinario_foto: "joao_silveira.jpg",
          veterinario_telefone1: "(21) 87654-3210",
          veterinario_telefone2: "(21) 91234-5678",
          endereco_rua: "Avenida dos Pets",
          endereco_numero: 456,
          endereco_complemento: "Apto. 202",
          endereco_bairro: "Cidade Nova",
          endereco_cidade: "Rio de Janeiro",
          endereco_estado: "RJ",
          endereco_cep: "20000-000",
          veterinario_email: "joao.silveira@example.com",
          veterinario_password: "senha123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          veterinario_nome: "Maria",
          veterinario_sobrenome: "Fernandes",
          veterinario_cpf: "111.222.333-44",
          veterinario_crmv: "MG67890",
          veterinario_foto: "maria_fernandes.jpg",
          veterinario_telefone1: "(31) 98765-4321",
          veterinario_telefone2: "(31) 91234-5678",
          endereco_rua: "Rua dos Animais",
          endereco_numero: 789,
          endereco_complemento: "Casa",
          endereco_bairro: "Jardim Botânico",
          endereco_cidade: "Belo Horizonte",
          endereco_estado: "MG",
          endereco_cep: "30000-000",
          veterinario_email: "maria.fernandes@example.com",
          veterinario_password: "senha456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          veterinario_nome: "Pedro",
          veterinario_sobrenome: "Gomes",
          veterinario_cpf: "555.666.777-88",
          veterinario_crmv: "SP98765",
          veterinario_foto: "pedro_gomes.jpg",
          veterinario_telefone1: "(11) 87654-3210",
          veterinario_telefone2: "(11) 91234-5678",
          endereco_rua: "Rua dos Bichos",
          endereco_numero: 321,
          endereco_complemento: "Apto. 101",
          endereco_bairro: "Vila Madalena",
          endereco_cidade: "São Paulo",
          endereco_estado: "SP",
          endereco_cep: "01000-000",
          veterinario_email: "pedro.gomes@example.com",
          veterinario_password: "senha789",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("veterinarios", null, {});
  },
};
