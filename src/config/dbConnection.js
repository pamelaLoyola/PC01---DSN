const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b52a0a098d00da',
    password: 'ab567a81',
    database: 'heroku_862582ce6ce2aac'
  });
}