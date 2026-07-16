const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "postgres",
  database: "top_users",
  password: "zveh2014",
  port: 5432 // The default port
});

// ALTERNATIVE
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });