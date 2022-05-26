const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getallExtensionClause = (access_Tokens)  => request.get('/internal/v1/extension-clause')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)


module.exports = {getallExtensionClause}

