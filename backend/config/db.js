const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dental_office",
});

const promisePool = pool.promise();

module.exports = promisePool;
