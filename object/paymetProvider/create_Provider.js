const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const createPaymentProvider = (access_Tokens, callback, code, desc, name)  => request.post('/internal/v1/payment-provider/create')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "callback_url": callback,
        "code": code,
        "description": desc,
        "name": name
      }
)

module.exports = {createPaymentProvider}

