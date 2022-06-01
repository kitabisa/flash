const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const getdetailContribution = (access_Tokens, sg_id)  => request.get('/private/v1/contribution/'+sg_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
module.exports = {getdetailContribution}

