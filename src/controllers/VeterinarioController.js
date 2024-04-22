const database = require("../models");

class VeterinarioController {
  static async GetVeterinarios(req, res) {
    try {
      const VeterinariosAll = await database.Veterinario.findAll();
      res.status(200).json(VeterinariosAll);
    } catch (error) {
      console.error("Erro ao obter veterinários:", error);
      res.status(500).json({ error: "Erro ao obter veterinários" });
    }
  }
}

module.exports = VeterinarioController;
