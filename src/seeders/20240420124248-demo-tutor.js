"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tutores",
      [
        {
          tutor_nome: "José",
          tutor_sobrenome: "Pereira",
          tutor_cpf: "092.393.840-06",
          tutor_foto: "https://www.foto_tutor.com.br",
          tutor_telefone1: "11986522365",
          tutor_telefone2: "11987956648",
          endereco_rua: "Rua Albuquerque de Souza",
          endereco_numero: 120,
          endereco_complemento: "Apto 56",
          endereco_bairro: "Vila Buarque",
          endereco_cidade: "São Paulo",
          endereco_estado: "São Paulo",
          endereco_cep: "01221010",
          tutor_email: "jose_pereira@email.com.br",
          tutor_password: "87fnldg888gdf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tutor_nome: "João",
          tutor_sobrenome: "Cardoso dos Santos",
          tutor_cpf: "638.981.070-94",
          tutor_foto: "https://www.foto_tutor2.com.br",
          tutor_telefone1: "14659852245",
          tutor_telefone2: "14756233658",
          endereco_rua: "Rua Albuquerque de Souza",
          endereco_numero: 120,
          endereco_complemento: "Apto 56",
          endereco_bairro: "Vila Buarque",
          endereco_cidade: "São Paulo",
          endereco_estado: "São Paulo",
          endereco_cep: "01221010",
          tutor_email: "joao_cardoso@email.com.br",
          tutor_password: "87fnldg88bbjjgdf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tutores", null, {});
  },
};
