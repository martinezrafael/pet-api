const express = require("express");
const veterinarios = require("./veterinarioRoute.js");
const tutores = require("./tutorRoute.js");
const pets = require("./petRoute.js");

module.exports = (app) => {
  app.use(express.json(), veterinarios, tutores, pets);
};
