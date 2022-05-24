const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailpublicServiceGroup = (id)  => request.get('/public/v1/service-group/'+id)
.set('Content-Type', 'application/json')


module.exports = {getdetailpublicServiceGroup}

