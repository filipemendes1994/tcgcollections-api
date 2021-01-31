const mysql = require('mysql');

module.exports = () => {
  const connection = mysql.createConnection({
    host: '172.17.0.1',
    port: '3306',
    user: 'user',
    password: 'password',
    database: 'tcgcollections',
  });

  connection.connect();
  return connection;
}
