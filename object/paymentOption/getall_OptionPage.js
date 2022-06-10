const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getPaymentOptionPage = (access_Tokens, sgID)  => request.get('/private/v1/available-options/'+sgID)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getPaymentOptionPage}

