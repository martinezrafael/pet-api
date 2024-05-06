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

/*async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão bem-sucedida!");
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
}

testConnection();*/

module.exports = sequelize;
