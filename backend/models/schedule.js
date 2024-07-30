const db = require("../config/db");

// Fetch all schedules for a specific doctor
const getSchedulesByDoctor = async (doctorId) => {
  const [schedules] = await db.query(
    "SELECT * FROM SCHEDULE WHERE DoctorID = ?",
    [doctorId]
  );
  return schedules;
};

// Fetch schedule by ID
const getScheduleById = async (scheduleId) => {
  const [schedule] = await db.query(
    "SELECT * FROM SCHEDULE WHERE ScheduleID = ?",
    [scheduleId]
  );
  return schedule[0];
};

module.exports = { getSchedulesByDoctor, getScheduleById };
