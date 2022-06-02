const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.purchase_URL)


const getSummary = (access_Tokens, purchaseID)  => request.get('/private/v1/summary/'+purchaseID)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports = {getSummary}