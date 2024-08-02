const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const authRoutes = require("./routes/auth.route");
const bookingRoutes = require("./routes/booking.route");
const homeRoutes = require("./routes/home.route");
const userRoutes = require("./routes/user.route");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/booking", bookingRoutes);
app.use("/home", homeRoutes);
app.use("/user", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
