const express = require("express");
const veterinarios = require("./veterinarioRoute.js");
const tutores = require("./tutorRoute.js");

module.exports = (app) => {
  app.use(express.json(), veterinarios, tutores);
};
