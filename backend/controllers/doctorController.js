const { getAllDoctors, getDoctorById } = require("../models/doctor");

const fetchAllDoctors = async (req, res) => {
  try {
    const doctors = await getAllDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const fetchDoctorById = async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const doctor = await getDoctorById(doctorId);
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { fetchAllDoctors, fetchDoctorById };
