require("dotenv").config();
const database = require("./infra/database.js");
const app = require("./src/app.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
