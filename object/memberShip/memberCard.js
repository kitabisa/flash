const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.membership_URL)

const memberCard = (access_Tokens, sgid) => request.get('/private/v1/card/service-group-id/'+sgid)
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports={memberCard}

