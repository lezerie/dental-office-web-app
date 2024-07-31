const db = require("../config/database");

class Appointment {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Appointment.*, DOCTOR.full_name AS doctor_name, SERVICE.name AS service_name, SERVICE.value AS service_value
         FROM Appointment
         JOIN SCHEDULE ON Appointment.Schedule = SCHEDULE.id
         JOIN DOCTOR ON SCHEDULE.Doctor = DOCTOR.id
         JOIN SERVICE ON Appointment.Service = SERVICE.id`,
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }

  static async create(appointment) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO Appointment SET ?", appointment, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  static async findByClient(client_id) {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT Appointment.*, DOCTOR.full_name AS doctor_name, SERVICE.name AS service_name
         FROM Appointment
         JOIN SCHEDULE ON Appointment.Schedule = SCHEDULE.id
         JOIN DOCTOR ON SCHEDULE.Doctor = DOCTOR.id
         JOIN SERVICE ON Appointment.Service = SERVICE.id
         WHERE Appointment.Client = ?`,
        [client_id],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }

  static async update(id, data) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE Appointment SET ? WHERE id = ?",
        [data, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }
}

module.exports = Appointment;
