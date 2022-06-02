const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.purchase_URL)

const createnewpurchase = (access_Tokens, donate_excess, purchaseID)  => request.post('/private/v1/payment/'+purchaseID)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "donate_excess_contribution": donate_excess
      }
)

module.exports = {createnewpurchase}