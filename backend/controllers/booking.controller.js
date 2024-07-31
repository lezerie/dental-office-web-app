const Schedule = require("../models/schedule.model");
const Appointment = require("../models/appointment.model");

class BookingController {
  static async getSchedules(req, res) {
    try {
      const { schedule_day } = req.query;
      const schedules = await Schedule.findByDay(schedule_day);
      res.json(schedules);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async getAppointments(req, res) {
    try {
      const appointments = await Appointment.findAll();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }

  static async createAppointment(req, res) {
    try {
      const { schedule_id, service_id, appointment_date } = req.body;
      const client_id = req.user.id;
      const appointment = {
        Schedule: schedule_id,
        Client: client_id,
        Service: service_id,
        appointment_date,
        status: "Scheduled",
      };
      await Appointment.create(appointment);
      res.status(201).json({ message: "Appointment booked successfully" });
    } catch (error) {
      res.status(500).json({ error: "Database error" });
    }
  }
}

module.exports = BookingController;
