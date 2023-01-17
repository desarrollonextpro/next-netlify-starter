const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "ufwwvgis",
  host: "queenie.db.elephantsql.com",
  database: "ufwwvgis",
  password: "8Pjd6q3sPlYh7ZT9aV83wNbddElnZ0b7",
  port: 5432,
});
module.exports = pool;
