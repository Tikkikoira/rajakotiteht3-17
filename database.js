require ("dotenv").config();

const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root' ,//process.env.USERNAME,
  password: 'joku', //process.env.PASSWORD,
  database: 'test_db4'
});
module.exports = connection;
