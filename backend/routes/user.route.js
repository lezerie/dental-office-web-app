const express = require("express");
const UserController = require("../controllers/user.controller");
const AuthService = require("../services/auth.service");

const router = express.Router();

router.get(
  "/appointments",
  AuthService.authenticateToken,
  UserController.getUserAppointments
);
router.put(
  "/appointments/:id",
  AuthService.authenticateToken,
  UserController.updateAppointment
);

module.exports = router;
