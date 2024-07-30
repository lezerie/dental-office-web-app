const { getSchedulesByDoctor, getScheduleById } = require("../models/schedule");

const fetchSchedulesByDoctor = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const schedules = await getSchedulesByDoctor(doctorId);
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const fetchScheduleById = async (req, res) => {
  try {
    const scheduleId = req.params.scheduleId;
    const schedule = await getScheduleById(scheduleId);
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { fetchSchedulesByDoctor, fetchScheduleById };
