const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const checkout = (access_Tokens, idempKey, poId, pcId, ppId, sgId) => request.post('/private/v1/checkout')
.set('Authorization', `Bearer ${access_Tokens}`)
.set('Idempotency-Key', idempKey)
.send({
        "payment_option_id": poId,
        "product_contribution_id": pcId,
        "product_purchase_id": ppId,
        "service_group_id": sgId,
        "token_id": ''
      
})

module.exports={checkout}