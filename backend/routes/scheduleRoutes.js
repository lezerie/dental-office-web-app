const express = require("express");
const {
  fetchSchedulesByDoctor,
  fetchScheduleById,
} = require("../controllers/scheduleController");

const router = express.Router();

router.get("/schedules/doctor/:doctorId", fetchSchedulesByDoctor);
router.get("/schedules/:scheduleId", fetchScheduleById);

module.exports = router;
