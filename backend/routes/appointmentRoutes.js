const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getAppointments } = require("../controllers/appointmentController");

const router = express.Router();

router.get("/appointments", authMiddleware, async (req, res) => {
  try {
    const appointments = await getAppointments(req.clientId);
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
