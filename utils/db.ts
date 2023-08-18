const mysql = require("mysql2/promise");

export const pool = mysql.createPool({
  port: "8889",
  host: "localhost",
  user: "root",
  password: "root",
  database: "my-typescript-and-react-app-DB",
  decimalNumbers: true,
  namedPlaceholders: true,
});
