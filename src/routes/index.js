const express = require("express");
const veterinarios = require("./veterinarioRoute.js");
const tutores = require("./tutorRoute.js");
const pets = require("./petRoute.js");
const consultas = require("./consultaRoute.js");
const exames = require("./exameRoute.js");
const servicos = require("./servicoRoute.js");

module.exports = (app) => {
  app.use(
    express.json(),
    veterinarios,
    tutores,
    pets,
    consultas,
    exames,
    servicos,
  );
};
