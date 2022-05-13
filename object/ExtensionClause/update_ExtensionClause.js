const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const updateExtensionClause = (id, code, name, desc, serviceCode)  => request.put('/product/extension-clause/'+id)
.set('Content-Type', 'application/json')
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc,
        "service_group_code" : serviceCode
    }
)

module.exports = {updateExtensionClause}

