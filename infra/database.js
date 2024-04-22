const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
);

async function dropAllTables() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    // Executar consulta SQL
    const [results, metadata] = await sequelize.query("SELECT * FROM tutores");
    console.log("Resultados da consulta:", results);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await sequelize.close();
  }
}

dropAllTables();
