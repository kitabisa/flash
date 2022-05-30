const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const deletePaymentOption = (access_Tokens, id, type_del)  => request.delete(`/internal/v1/payment-option/delete/${id}?`)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.query({
    type_delete : type_del
})
module.exports = {deletePaymentOption}

