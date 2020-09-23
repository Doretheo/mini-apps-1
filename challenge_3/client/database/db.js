var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'theo',
  database: 'checkout'
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Database');
  } else {
    console.log('Success connecting to database checkout')
  }
})

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

module.export = connection;

