const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)


const createExtensionClause = (access_Tokens, code, name, desc, serviceCode)  => request.post('/internal/v1/extension-clause')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc,
        "service_group_code" : serviceCode
    }
)

module.exports = {createExtensionClause}

