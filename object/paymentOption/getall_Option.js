const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getPaymentOption = (access_Tokens)  => request.get('/internal/v1/payment-option/fetch-all')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getPaymentOption}

