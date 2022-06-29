const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)
const canceled = (access_Tokens, ppID) => request.post('/private/v1/cancel')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send({
    "product_payment_id": ppID
})

module.exports = {canceled}