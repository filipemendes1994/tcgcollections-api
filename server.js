'use strict';

const app = require('./config/express')();
const dbConnection = require('./config/database')();

dbConnection.query('SELECT * FROM collections', function (err, rows, fields) {
  if (err) return;
  console.log('The solution is: ', rows[0]);
})

const port = app.get('port');
app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
