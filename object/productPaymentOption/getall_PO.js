const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getProductPaymentOption = (access_Tokens)  => request.get('/internal/v1/product-payment-option/fetch-all')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getProductPaymentOption}

