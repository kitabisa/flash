const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getallpublicServiceGroup = ()  => request.get('/internal/v1/service-group/public')
.set('Content-Type', 'application/json')


module.exports = {getallpublicServiceGroup}

