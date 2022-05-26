const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const deletePaymentProvider = (access_Tokens, id)  => request.delete('/internal/v1/payment-provider/delete'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {deletePaymentProvider}

