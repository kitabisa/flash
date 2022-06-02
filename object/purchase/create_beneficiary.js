const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.purchase_URL)

const createBeneficiary = (access_Tokens, dob, fulname, inform, ktp, phone, relations, user_id, purchaseID)  => request.post('/private/v1/beneficiary/'+purchaseID)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
    {
        "dob": dob,
        "fullname": fulname,
        "inform_beneficiary": inform,
        "ktp": ktp,
        "phone_number": phone,
        "relation": relations,
        "user_id": user_id
      }
)

module.exports = {createBeneficiary}