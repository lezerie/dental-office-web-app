const Service = require("../models/service.model");

class HomeController {
  static async getServices(req, res) {
    try {
      const services = await Service.findAll();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }
}

module.exports = HomeController;