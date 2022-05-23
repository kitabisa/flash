const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getDeductible = ()  => request.get('/internal/v1//deductible')
.set('Content-Type', 'application/json')

module.exports = {getDeductible}

