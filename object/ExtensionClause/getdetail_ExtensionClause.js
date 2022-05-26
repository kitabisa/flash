const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailExtensionClause = (access_Tokens, id)  => request.get('/internal/v1/extension-clause/'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)


module.exports = {getdetailExtensionClause}

