var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3050;
const db = require('../database/db.js');
const controllerRequest = require('./controller.js')

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.post('/account', controllerRequest.postAccount);
app.post('/hood', controllerRequest.postHood);
app.post('/creditCard', controllerRequest.postCreditCard);


app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`)
})
