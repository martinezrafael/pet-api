const { Sequelize } = require("sequelize");

console.log(process.env.DATABASE);

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
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
