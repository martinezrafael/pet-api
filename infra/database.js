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

    // Consulta SQL para obter todas as tabelas no banco de dados
    const query = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE';
    `;

    // Executa a consulta SQL diretamente no banco de dados
    const [results, metadata] = await sequelize.query(query);

    // Exibe o nome das tabelas
    console.log("Tabelas no banco de dados:");
    results.forEach((row) => {
      console.log(row.table_name);
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
