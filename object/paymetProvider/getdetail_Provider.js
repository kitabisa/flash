const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getdetailPaymentProvider = (id)  => request.get('/internal/v1/payment-provider/fetch/'+id)
.set('Content-Type', 'application/json')

module.exports = {getdetailPaymentProvider}

