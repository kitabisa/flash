const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)
const kulo = supertest(process.env.kulo_URL)


const createExtensionClause = (code, name, desc, serviceCode)  => request.post('/product/extension-clause')
.set('Content-Type', 'application/json')
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc,
        "service_group_code" : serviceCode
    }
)

module.exports = {createExtensionClause}

