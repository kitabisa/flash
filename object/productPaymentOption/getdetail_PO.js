const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getdetailProductPaymentOption = (access_Tokens, ppo_id)  => request.get('/internal/v1/product-payment-option/fetch/'+ppo_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getdetailProductPaymentOption}

