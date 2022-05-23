const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const deleteDeductible = (id)  => request.delete('/deductible/'+id)
.set('Content-Type', 'application/json')

module.exports = {deleteDeductible}

