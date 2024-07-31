const Appointment = require("../models/appointment.model");

class UserController {
  static async getUserAppointments(req, res) {
    try {
      const client_id = req.user.id;
      const appointments = await Appointment.findByClient(client_id);
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async updateAppointment(req, res) {
    try {
      const { id } = req.params;
      const { status, remarks } = req.body;
      await Appointment.update(id, { status, remarks });
      res.json({ message: "Appointment updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }
}

module.exports = UserController;
