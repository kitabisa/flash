const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)
const statuss = (access_Tokens, ppid) => request.get('/private/v1/payment-status/'+ppid)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports = {statuss}