const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)

const updateProductPaymentProvider = (access_Tokens, desc, display_name,is_activ, position_order, po_id, sg_id, ppo_id)  => request.patch('/internal/v1/product-payment-option/update/'+ppo_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
  {
    "description": desc,
    "display_name": display_name,
    "is_active": is_activ,
    "ord_position": position_order,
    "payment_option_id": po_id, 
    "service_group_id": sg_id
  }
)

module.exports = {updateProductPaymentProvider}
