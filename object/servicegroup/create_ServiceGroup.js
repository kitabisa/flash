const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const createServiceGroup = (access_Tokens,code, name, desc)  => request.post('/internal/v1/service-group')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc
    }
)

module.exports = {createServiceGroup}

