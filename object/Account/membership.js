const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.accountService_URL)

const membership = (access_Tokens) => request.post('/private/v1/membership/is-active')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports={membership}

