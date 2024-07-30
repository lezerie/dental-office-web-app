const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getClientByEmail, createClient } = require("../models/client");

const register = async (req, res) => {
  try {
    const { ClientName, Contact, Email, Password } = req.body;

    // Check if client exists
    const existingClient = await getClientByEmail(Email);
    if (existingClient) {
      return res.status(400).json({ message: "Client already exists" });
    }

    // Hash password and create client
    const hashedPassword = await bcrypt.hash(Password, 10);
    const clientId = await createClient({
      ClientName,
      Contact,
      Email,
      Password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Client registered successfully", clientId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Check if client exists
    const client = await getClientByEmail(Email);
    if (!client) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(Password, client.Password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ clientId: client.ClientID }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { register, login };
