const db = require("../config/db");

// Fetch all doctors
const getAllDoctors = async () => {
  const [doctors] = await db.query("SELECT * FROM DOCTOR");
  return doctors;
};

// Fetch a doctor by ID
const getDoctorById = async (doctorId) => {
  const [doctor] = await db.query("SELECT * FROM DOCTOR WHERE DoctorID = ?", [
    doctorId,
  ]);
  return doctor[0];
};

module.exports = { getAllDoctors, getDoctorById };
