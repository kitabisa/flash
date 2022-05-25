const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getallpublicServiceGroup = ()  => request.get('/private/v1/service-group')
.set('Content-Type', 'application/json')


module.exports = {getallpublicServiceGroup}

