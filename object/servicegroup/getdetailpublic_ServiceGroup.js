const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailpublicServiceGroup = (id)  => request.get('/service-group/public/'+id)
.set('Content-Type', 'application/json')


module.exports = {getdetailpublicServiceGroup}

