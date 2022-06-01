const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.productSevice_URL)

const updateContribution = (access_Tokens, contri_fee, contri_month, disp_name, is_activ, is_popular, nama, ord_position, sg_id, strike_fee, contri_id)  => request.put('/internal/v1/contribution/'+contri_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
  {
    "contribution_fee": contri_fee,
    "contribution_month": contri_month,
    "display_name": disp_name,
    "is_active": is_activ,
    "is_popular": is_popular,
    "name": nama,
    "ord_position": ord_position,
    "service_group_id": sg_id,
    "strikethrough_contribution_fee": strike_fee
  }
)

module.exports = {updateContribution}
