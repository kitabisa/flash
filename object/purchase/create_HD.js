const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.purchase_URL)

const createHD = (access_Tokens, contri_id, ages, jobs, medicals, sgID, types)  => request.post('/private/v1/health-declaration')
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "contribution_id": contri_id,
        "health_declaration_json": {
          "age": ages,
          "job": jobs,
          "medical": medicals
        },
        "service_group_id": sgID,
        "type": types
      }
)

module.exports = {createHD}