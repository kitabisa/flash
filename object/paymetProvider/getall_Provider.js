const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getPaymentProvider = (access_Tokens)  => request.get('/internal/v1/payment-provider/fetch-all')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getPaymentProvider}

