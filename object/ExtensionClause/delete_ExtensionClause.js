const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const deleteExtensionClause = (id)  => request.delete('/internal/v1/extension-clause/'+id)
.set('Content-Type', 'application/json')

module.exports = {deleteExtensionClause}

