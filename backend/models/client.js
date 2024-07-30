const db = require("../config/db");

const getClientByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM CLIENT WHERE Email = ?", [
    email,
  ]);
  return rows[0];
};

const createClient = async (client) => {
  const { ClientName, Contact, Email, Password } = client;
  const [result] = await db.query(
    "INSERT INTO CLIENT (ClientName, Contact, Email, Password) VALUES (?, ?, ?, ?)",
    [ClientName, Contact, Email, Password]
  );
  return result.insertId;
};

module.exports = { getClientByEmail, createClient };
