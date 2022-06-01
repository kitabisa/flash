const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const deleteContribution = (access_Tokens, contri_id)  => request.delete(`/internal/v1/contribution/${contri_id}`)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {deleteContribution}

