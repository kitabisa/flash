const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const deleteServiceGroup = (id)  => request.delete('/internal/v1/service-group/'+id)
.set('Content-Type', 'application/json')

module.exports = {deleteServiceGroup}

