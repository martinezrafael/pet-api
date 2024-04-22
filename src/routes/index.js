const express = require("express");
const veterinarios = require("./veterinarioRoute.js");

module.exports = (app) => {
  app.use(express.json(), veterinarios);
};
