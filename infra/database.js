const { Sequelize } = require("sequelize");

console.log(process.env.DATABASE);

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
  },
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
