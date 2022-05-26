const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const deleteExtensionClause = (access_Tokens, id)  => request.delete('/internal/v1/extension-clause/'+id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)

module.exports = {deleteExtensionClause}

