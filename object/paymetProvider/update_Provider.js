const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const updatePaymentProvider = (callback, code, name, desc)  => request.patch('/internal/v1/payment-provider/update/'+id)
.set('Content-Type', 'application/json')
.send(
    {
        "callback_url": callback,
        "code": code,
        "description": desc,
        "name": name
      }
)

module.exports = {updatePaymentProvider}
