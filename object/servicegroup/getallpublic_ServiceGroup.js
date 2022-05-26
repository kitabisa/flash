const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getallpublicServiceGroup = (access_Tokens)  => request.get('/private/v1/service-group')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports = {getallpublicServiceGroup}

