const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getdetailPaymentProvider = (access_Tokens, id)  => request.get('/internal/v1/payment-provider/fetch/'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getdetailPaymentProvider}

