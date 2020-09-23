// database file

var mysql = require('mysql');
var conneciton = mysql.createConnection(
  host: 'localhost',
  name: 'root',
  password: 'theo',
  database: 'connectFourDB'
)

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database')
  } else {
    console.log('Backend database connected')
  }
})

module.exports = connection;
