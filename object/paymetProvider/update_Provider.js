const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const updatePaymentProvider = (id, callback, code, desc, name)  => request.patch('/internal/v1/payment-provider/update/'+id)
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
