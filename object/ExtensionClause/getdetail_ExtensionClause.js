const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailExtensionClause = (id)  => request.get('/extension-clause/'+id)
.set('Content-Type', 'application/json')


module.exports = {getdetailExtensionClause}

