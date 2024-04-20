"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "veterinarios",
      [
        {
          veterinario_nome: "Rafael",
          veterinario_sobrenome: "Molina Martinez",
          veterinario_cpf: "838.790.490-25",
          veterinario_crmv: "123456",
          veterinario_foto: "https://foto_exemplo.com.br",
          veterinario_telefone1: "13982166495",
          veterinario_telefone2: "11987153175",
          endereco_rua: "Benedito Oliva de Lacerda",
          endereco_numero: 17,
          endereco_complemento: "Apto 42",
          endereco_bairro: "Centro",
          endereco_cidade: "Peruíbe",
          endereco_estado: "São Paulo",
          endereco_cep: "11770142",
          veterinario_email: "rafaelmartinez.contato@gmail.com",
          veterinario_password: "1234567",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          veterinario_nome: "Aline",
          veterinario_sobrenome: "Dutra",
          veterinario_cpf: "219.530.500-26",
          veterinario_crmv: "654367",
          veterinario_foto: "https://foto_exemplo_aline.com.br",
          veterinario_telefone1: "11987153175",
          veterinario_telefone2: "13982166495",
          endereco_rua: "Benedito Oliva de Lacerda",
          endereco_numero: 17,
          endereco_complemento: "Apto 42",
          endereco_bairro: "Centro",
          endereco_cidade: "Peruíbe",
          endereco_estado: "São Paulo",
          endereco_cep: "11770142",
          veterinario_email: "alinedutra.contato@gmail.com",
          veterinario_password: "887654343",
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
