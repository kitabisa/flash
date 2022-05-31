const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.accountService_URL)

const userInfo = (acc_token) => request.get('/private/v1/account/userinfo')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${acc_token}`)

module.exports = {userInfo}