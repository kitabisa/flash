const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getallExtensionClause = ()  => request.get('/extension-clause')
.set('Content-Type', 'application/json')


module.exports = {getallExtensionClause}

