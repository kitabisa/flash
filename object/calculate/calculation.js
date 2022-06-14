const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const calcu = (access_Tokens, contributFee, ppoId) => request.post('/private/v1/calculate')
.set('Authorization', `Bearer ${access_Tokens}`)
.send({
    "contribution_fee": contributFee,
    "product_payment_option_id": ppoId
})

module.exports={calcu}