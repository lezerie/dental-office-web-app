const db = require("../config/db");

// Fetch all appointments for a specific client
const getAppointmentsByClient = async (clientId) => {
  const [appointments] = await db.query(
    "SELECT * FROM APPOINTMENT WHERE ClientID = ?",
    [clientId]
  );
  return appointments;
};

// Fetch an appointment by ID
const getAppointmentById = async (appointmentId) => {
  const [appointment] = await db.query(
    "SELECT * FROM APPOINTMENT WHERE AppointmentID = ?",
    [appointmentId]
  );
  return appointment[0];
};

// Create a new appointment
const createAppointment = async (appointment) => {
  const { ScheduleID, ClientID, AppointmentDate, Status } = appointment;
  const [result] = await db.query(
    "INSERT INTO APPOINTMENT (ScheduleID, ClientID, AppointmentDate, Status) VALUES (?, ?, ?, ?)",
    [ScheduleID, ClientID, AppointmentDate, Status]
  );
  return result.insertId;
};

module.exports = {
  getAppointmentsByClient,
  getAppointmentById,
  createAppointment,
};
