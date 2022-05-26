const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)


const createDeductible = (access_Tokens, code, name, desc, serviceCode, calcu_method, calcu_value)  => request.post('/internal/v1/deductible')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc,
        "service_group_code" : serviceCode,
        "calculation_method" : calcu_method,
        "calculation_value"  : calcu_value
    }
)

module.exports = {createDeductible}

