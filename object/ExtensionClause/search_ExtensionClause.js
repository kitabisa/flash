const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)


const searchExtensionClause = (serviceCode, code, name)  => request.post('/internal/v1/extension-clause/search')
.set('Content-Type', 'application/json')
.send(
    {
        "service_group_code" : serviceCode,
        "code" : code,
        "name" : name
    }
)

module.exports = {searchExtensionClause}

