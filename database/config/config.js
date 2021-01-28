require('dotenv').config();

// Update this file with your mysql database password
module.exports = {
  "development": {
    "username": "niv",
    "password": "suroghon",
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

//NY TIMES API
var config = {
  MY_API_TOKEN : 'uo8kDH7ynagM6B20qSWeGTocjSemJi7k',
  SECRET_API_KEY : '0qliqc4S5ThIYk3M',
};