const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const createPaymentOption = (access_Tokens, category, desc, fixfee, name, persenfee, providerId)  => request.post('/internal/v1/product-payment-option/create')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "category": category,
        "description": desc,
        "fixed_fee": fixfee,
        "name": name,
        "percentage_fee": persenfee,
        "provider_id": providerId
      }
)

module.exports = {createPaymentOption}

