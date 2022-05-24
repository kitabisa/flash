const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const createPaymentProvider = (callback, code, name, desc)  => request.post('/internal/v1/payment-provider/create')
.set('Content-Type', 'application/json')
.send(
    {
        "callback_url": callback,
        "code": code,
        "description": desc,
        "name": name
      }
)

module.exports = {createPaymentProvider}

