const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.accountService_URL)

const exchangeTokenAccount = (ktbs_token) => request.get('/public/v1/exchange_token').
    set('Content-Type', 'application/json').
    set('Authorization', 'Bearer ' + ktbs_token).
    send();


module.exports = {exchangeTokenAccount}