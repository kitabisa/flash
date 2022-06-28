const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const createServiceGroup = (access_Tokens,code, name, desc, ujrah)  => request.post('/internal/v1/service-group')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "code" : code,
        "name" : name,
        "description" : desc,
        "ujrah_percentage_fee" : ujrah,
        "waiting_period_days" : 60,
        "grace_period_days" : 30,
        "total_period_months" :3
    }
)

module.exports = {createServiceGroup}

