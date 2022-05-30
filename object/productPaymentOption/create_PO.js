const supertest = require('supertest');
const env = require('dotenv').config();

const request = supertest(process.env.paymentService_URL)


const createProductPaymentOption = (access_Tokens, desc, display_name, is_activ, position_order, po_id, sg_id)  => request.post('/internal/v1/product-payment-option/create/'+sg_id)
.set('Content-Type', 'application/json')
.set('Authorization', `Bearer ${access_Tokens}`)
.send(
  {
    "description": desc,
    "display_name": display_name,
    "is_active": is_activ,
    "ord_position": position_order,
    "payment_option_id": po_id
  }
)

module.exports = {createProductPaymentOption}

