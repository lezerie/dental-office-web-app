const express = require("express");
const {
  fetchAllDoctors,
  fetchDoctorById,
} = require("../controllers/doctorController");

const router = express.Router();

router.get("/doctors", fetchAllDoctors);
router.get("/doctors/:doctorId", fetchDoctorById);

module.exports = router;
