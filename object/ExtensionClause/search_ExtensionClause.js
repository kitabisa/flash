const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)


const searchExtensionClause = (access_Tokens, serviceCode, code, name)  => request.post('/internal/v1/extension-clause/search')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "service_group_code" : serviceCode,
        "code" : code,
        "name" : name
    }
)

module.exports = {searchExtensionClause}

