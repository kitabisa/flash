const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const updateDeductible = (access_Tokens, id, code, name, desc, serviceCode, calcu_method, calcu_value)  => request.put('/internal/v1/deductible/'+id)
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

module.exports = {updateDeductible}
