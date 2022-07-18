const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.wongService_URL)

const wongAccount = (usernames) => request.post('/wong/login')
    .set('Content-Type', 'application/json')
    .set('Version', '3.0.0')
    .set('X-Ktbs-Request-ID', 'e81be048-fa0b-4a91-9a37-f1d535794440')
    .set('X-Ktbs-Api-Version', '3.3.0')
    .set('X-Ktbs-Client-Version', '3.3.0')
    .set('X-Ktbs-Platform-Name', 'kanvas')
    .set('X-Ktbs-Client-Name', 'wong')
    .set('X-Ktbs-Time', '1652424027749')
    .set('X-Ktbs-Signature', 'ed7a82c0e4d0ed5cfb9a9af19286be59226f4b9fe2a75d0e8509a8e181ffe279')
    .send({
            username: usernames,
            password: 'kitabisa'
    })
    

module.exports = {wongAccount}