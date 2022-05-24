const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const deletePaymentProvider = (id)  => request.delete('/internal/v1/payment-provider/delete'+id)
.set('Content-Type', 'application/json')

module.exports = {deletePaymentProvider}

