const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", scheduleRoutes);
app.use("/api", doctorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
