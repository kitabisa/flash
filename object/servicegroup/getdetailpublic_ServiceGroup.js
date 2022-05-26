const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailpublicServiceGroup = (access_Tokens, id)  => request.get('/private/v1/service-group/'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports = {getdetailpublicServiceGroup}

