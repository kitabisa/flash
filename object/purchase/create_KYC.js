const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.purchase_URL)

const createKYC = (access_Tokens, dob, fulname, ktp, phone, purchaseID)  => request.post('/private/v1/kyc/'+purchaseID)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "dob": dob,
        "fullname": fulname,
        "ktp": ktp,
        "phone_number": phone
      }
)

module.exports = {createKYC}