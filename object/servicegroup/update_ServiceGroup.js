const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const updateServiceGroup = (id, code, name, desc)  => request.put('/internal/v1/service-group/'+id)
.set('Content-Type', 'application/json')
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc
    }
)

module.exports = {updateServiceGroup}

