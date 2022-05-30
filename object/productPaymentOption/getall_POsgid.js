const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const getProductPaymentOptionsgid = (access_Tokens, sg_id)  => request.get('/internal/v1/product-payment-option/fetch-all/'+sg_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getProductPaymentOptionsgid}

