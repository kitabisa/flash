const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getdetailPaymentOption = (access_Tokens, id)  => request.get('/internal/v1/payment-option/fetch/'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getdetailPaymentOption}

