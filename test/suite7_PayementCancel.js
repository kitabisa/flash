const assert = require('chai').expect;
const cancel = require('../object/product_Payment/payment_cancel')
const status = require('../object/product_Payment/check_StatusPayment')
const datas = require('../data/var')

describe('API Product Payment', () => {
    describe('Payment Cancel', () => {
        it('when user hit api payment cancel, then status on table product payment will be cancel.', async () => {
            const res = await cancel.canceled(global.access_Tokens1, global.ppids)
            assert(res.status).to.equal(200)
            //console.log(res.text);
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("idempotency_key").to.equal(datas.checkout.idempotensi)
            assert(res.body.data[0]).to.have.property("service_group_id").to.equal(global.serviceids)
            assert(res.body.data[0]).to.have.property("payment_option_id").to.equal(global.idpaoption)
            assert(res.body.data[0]).to.have.property("product_purchase_id").to.equal(global.idpurcahse)
            assert(res.body.data[0]).to.have.property("product_contribution_id").to.equal(global.idpoc)
            assert(res.body.data[0]).to.have.property("percentage_fee").to.equal(0)
            assert(res.body.data[0]).to.have.property("fixed_fee").to.equal(datas.paymentOption.fixfee)
            assert(res.body.data[0]).to.have.property("contribution_fee").to.equal(datas.contribution.contriFee)
            assert(res.body.data[0]).to.have.property("total_tabarru").to.equal(total_tabaru)
            assert(res.body.data[0]).to.have.property("total_ujrah").to.equal(total_ujrah)
            assert(res.body.data[0]).to.have.property("total_fee").to.equal(fixfee_total_fee)
            assert(res.body.data[0]).to.have.property("total_payment").to.equal(F_total_payment)

        });
        it('when user hit api payment cancel using status expired, then got response error', async () => {
            const res = await cancel.canceled(global.access_Tokens1, datas.status.ppid_expired)
            assert(res.status).to.equal(400)
        });
        it('when user hit api payment cancel using status paid, then got response error', async () => {
            const res = await cancel.canceled(global.access_Tokens1, datas.status.ppid_paid)
            assert(res.status).to.equal(400)
        });
    });
    describe('Payment Status', () => {
        it('when user hit api payment status, then user will be see sumarry payment', async() => {
            after(async function statuspayment()  {
                const res = await status.statuss(global.access_Tokens1, global.ppids)
                assert(res.status).to.equal(200)
                //console.log(res.text);
                assert(res.body.data[0]).to.have.property("id").exist
                assert(res.body.data[0]).to.have.property("display_name").exist
                assert(res.body.data[0]).to.have.property("total_fee").exist
                assert(res.body.data[0]).to.have.property("total_payment").exist
                assert(res.body.data[0]).to.have.property("external_reference_id").exist
                assert(res.body.data[0]).to.have.property("status").exist
                assert(res.body.data[0]).to.have.property("image_url").exist
                assert(res.body.data[0]).to.have.property("expired_at").exist

            });
        });

    });
});
