const modelRequest = require('./model');

const getRequest = (req, res) => {

  modelRequest.getRequest((err, request) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(request)
    }
  })
}

const postAccount = (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email, pass } = req.body
  console.log('Recieved ACCOUNT post request')

  modelRequest.postAccount(firstName, lastName, email, pass, (err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  })
}

const postHood = (req, res) => {
  console.log(req.body)
  const { address_1, address_2, city, little_country, zipcode } = req.body
  console.log('Recieved HOOD post request')
  modelRequest.postHood(address_1, address_2, city, little_country, zipcode, (err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  })
}

const postCreditCard = (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email, pass } = req.body
  console.log('Recieved CREDIT CARD post request')
  modelRequest.postCreditCard(firstName, lastName, email, pass, (err) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  })
}
module.exports = {
  getRequest,
  postAccount,
  postHood,
  postCreditCard
}