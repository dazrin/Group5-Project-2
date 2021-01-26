require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "kingDDom.",
    "database": "redditlite_db",
    "host": "localhost",
    "dialect": "mysql",
    // "use_env_variable": "DEV_DATABASE_URL"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "redditlite_db",
    "host": "localhost",
    "dialect": "mysql",
   // "use_env_variable": "TEST_DATABASE_URL"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "redditlite_db",
    "host": "localhost",
    "dialect": "mysql",
  // "use_env_variable": "DATABASE_URL"
  }
}
