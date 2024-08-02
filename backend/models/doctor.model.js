const db = require("../config/db");

class Doctor {
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM Doctor", (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = Doctor;
