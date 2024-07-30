const db = require("../config/db");

const getAppointments = async (clientId) => {
  const [appointments] = await db.query(
    "SELECT * FROM APPOINTMENT WHERE ClientID = ?",
    [clientId]
  );
  return appointments;
};

module.exports = { getAppointments };
