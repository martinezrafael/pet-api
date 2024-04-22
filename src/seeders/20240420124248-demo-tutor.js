"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tutores",
      [
        {
          tutor_nome: "Luciana",
          tutor_sobrenome: "Oliveira",
          tutor_cpf: "123.456.789-00",
          tutor_foto: "luciana_oliveira.jpg",
          tutor_telefone1: "(11) 98765-4321",
          tutor_telefone2: "(11) 91234-5678",
          endereco_rua: "Rua dos Pets",
          endereco_numero: 123,
          endereco_complemento: "Casa",
          endereco_bairro: "Centro",
          endereco_cidade: "São Paulo",
          endereco_estado: "SP",
          endereco_cep: "01000-000",
          tutor_email: "luciana.oliveira@example.com",
          tutor_password: "senha123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tutor_nome: "Marcos",
          tutor_sobrenome: "Ferreira",
          tutor_cpf: "987.654.321-00",
          tutor_foto: "marcos_ferreira.jpg",
          tutor_telefone1: "(21) 87654-3210",
          tutor_telefone2: "(21) 91234-5678",
          endereco_rua: "Avenida dos Animais",
          endereco_numero: 456,
          endereco_complemento: "Apto. 202",
          endereco_bairro: "Barra da Tijuca",
          endereco_cidade: "Rio de Janeiro",
          endereco_estado: "RJ",
          endereco_cep: "20000-000",
          tutor_email: "marcos.ferreira@example.com",
          tutor_password: "senha456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tutor_nome: "Carla",
          tutor_sobrenome: "Santos",
          tutor_cpf: "111.222.333-44",
          tutor_foto: "carla_santos.jpg",
          tutor_telefone1: "(31) 98765-4321",
          tutor_telefone2: "(31) 91234-5678",
          endereco_rua: "Rua das Plantas",
          endereco_numero: 789,
          endereco_complemento: "Casa",
          endereco_bairro: "Floresta",
          endereco_cidade: "Belo Horizonte",
          endereco_estado: "MG",
          endereco_cep: "30000-000",
          tutor_email: "carla.santos@example.com",
          tutor_password: "senha789",
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
