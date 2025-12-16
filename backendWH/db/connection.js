const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "marvel_db",
  password: "Developer55*",
  port: 5433,
});
pool
  .connect()
  .then(() => console.log("Conectado a PostgreSQL"))
  .catch((err) => console.error("Error conectando a PostgreSQL:", err.message));

module.exports = pool;
