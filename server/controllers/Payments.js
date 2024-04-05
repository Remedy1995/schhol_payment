require("dotenv").config()
const Classgrade = require('../models/Classgrade');
const jwt = require("jsonwebtoken");
const https = require('https');
const verifyPayment = require("../controllers/VerifyPayment");
var reference = "";
exports.Payment = (req, response, next) => {
  const params = JSON.stringify({
    "email": "customer@email.com",
    "amount": "20000"
  })

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_API}`,
      'Content-Type': 'application/json'
    }
  }

  const request = https.request(options, res => {
    let data = ''

    res.on('data', (chunk) => {
      data += chunk
    });

    res.on('end', () => {
      console.log(JSON.parse(data))
      response.status(201).json({
        message: JSON.parse(data)
      })
    })
  }).on('error', error => {
    console.error(error)
  })

  request.write(params)
  request.end()

}



exports.PaymentInformation = (req, response, next) => {
  const paymentInformation = verifyPayment(reference);
  console.log('This payment is completed', paymentInformation);
}

