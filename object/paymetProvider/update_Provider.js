const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const updatePaymentProvider = (access_Tokens, id, callback, code, desc, name)  => request.patch('/internal/v1/payment-provider/update/'+id)
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

module.exports = {updatePaymentProvider}
