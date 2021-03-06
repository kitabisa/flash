const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const updateExtensionClause = (access_Tokens, id, code, name, desc, serviceCode)  => request.put('/internal/v1/extension-clause/'+id)
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

module.exports = {updateExtensionClause}

