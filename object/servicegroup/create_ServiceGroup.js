const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const createServiceGroup = (code, name, desc)  => request.post('/service-group')
.set('Content-Type', 'application/json')
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc
    }
)

module.exports = {createServiceGroup}

