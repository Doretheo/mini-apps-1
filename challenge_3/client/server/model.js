const db = require('../database/db.js');

const getRequest = (callback) => {
  const q = 'SELECT * FROM checkoutList';

  db.query(q, callback)
}

const postAccount = (firstName, lastName, email, pass, cb) => {
  q = `INSERT INTO account (first_name, last_name, email, pass) VALUES (?), (?), (?), (?)`

  db.query(q, [firstName, lastName, email, pass], cb)
}

const postHood = (address_1, address_2, city, little_country, zipcode, cb) => {
  q = `INSERT INTO account (address_1, address_2, city, little_country, zipcode) VALUES (?), (?), (?), (?), (?)`

  db.query(q, [address_1, address_2, city, little_country, zipcode], cb)
}

const postCreditCard = (credit_card, expiry_data, CVV, billing_zipcode, cb) => {
  q = `INSERT INTO account (credit_card, expiry_data, CVV, billing_zipcode) VALUES (?), (?), (?), (?)`

  db.query(q, [credit_card, expiry_data, CVV, billing_zipcode], cb)
}

module.exports = {
  getRequest,
  postAccount,
  postHood,
  postCreditCard
}