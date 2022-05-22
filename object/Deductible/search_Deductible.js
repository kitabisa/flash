const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)


const searchDeductible = (serviceCode, code, name)  => request.post('/deductible')
.set('Content-Type', 'application/json')
.send(
    {
        "service_group_code" : serviceCode,
        "code" : code,
        "name" : name
    }
)

module.exports = {searchDeductible}
