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

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    // Consulta SQL para selecionar todos os registros da tabela veterinarios
    const query = `
      SELECT *
      FROM tutores;
    `;

    // Executa a consulta SQL diretamente no banco de dados
    const [results, metadata] = await sequelize.query(query);

    // Exibe os resultados
    console.log("Registros na tabela tutores:");
    console.log(results);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
