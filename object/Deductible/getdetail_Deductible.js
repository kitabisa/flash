const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailDeductible = (id)  => request.get('/deductible/'+id)
.set('Content-Type', 'application/json')

module.exports = {getdetailDeductible}

