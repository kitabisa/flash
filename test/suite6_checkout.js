const assert = require('chai').expect;
const datas = require('../data/var')
const cekout = require('../object/checkout/checkout')
const TC_CekoutFixfee = require('../data/testcase/checkout/fixfee.json')
const TC_Cekoutpersenfee = require('../data/testcase/checkout/persenfee.json')
const date = require('../object/date')




describe('API Checkout Service', () => {
    describe('Checkout/Capture Purchase', () => {
        console.log(date.minDobs);
        console.log(date.maxDobs);
        before(async function calucated() {
            ujrah = datas.service_Group.ujrah / 100
            ujrah1 = datas.service_Group.ujrah1 / 100
            persenfee = datas.paymentOption.persenfee / 100
            persen_total_fee = datas.contribution.contriFee * persenfee
            fixfee_total_fee = datas.paymentOption.fixfee
            total_ujrah = ujrah * datas.contribution.contriFee
            total_ujrah1 = ujrah1 * datas.contribution.contriFee
            total_tabaru = datas.contribution.contriFee - total_ujrah
            total_tabaru1 = datas.contribution.contriFee - total_ujrah1
            P_total_payment = datas.contribution.contriFee + persen_total_fee
            F_total_payment = datas.contribution.contriFee + fixfee_total_fee
        });
        it(`${TC_CekoutFixfee.positive.fixfee}`, async () => {
            const res = await cekout.checkout(global.access_Tokens1, datas.checkout.idempotensi, global.idpaoption, global.idpoc, global.idpurcahse, global.serviceids)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            global.ppids = res.body.data[0].id
            console.log(res.text);
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
            assert(res.body.data[0]).to.have.property("external_reference_id").exist
            assert(res.body.data[0]).to.have.property("status").exist
            assert(res.body.data[0]).to.have.property("paid_at")
            assert(res.body.data[0].actions[0]).to.have.property("name").exist
            assert(res.body.data[0].actions[0]).to.have.property("method").exist
            assert(res.body.data[0].actions[0]).to.have.property("url").exist
            assert(res.body.data[0]).to.have.property("va_numbers")
            assert(res.body.data[0]).to.have.property("expired_at").exist

            
        });
        it(`${TC_Cekoutpersenfee.positive.persentagefee}`, async () => {
            after(async function checkouts() {
                this.timeout(5000); 
                const res = await cekout.checkout(global.access_Tokens1, datas.checkout.idempotensi1, global.idpaoption1, global.idpoc1, global.idpurcahse1, global.serviceids1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            console.log(res.text);
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("idempotency_key").to.equal(datas.checkout.idempotensi1)
            assert(res.body.data[0]).to.have.property("service_group_id").to.equal(global.serviceids1)
            assert(res.body.data[0]).to.have.property("payment_option_id").to.equal(global.idpaoption1)
            assert(res.body.data[0]).to.have.property("product_purchase_id").to.equal(global.idpurcahse1)
            assert(res.body.data[0]).to.have.property("product_contribution_id").to.equal(global.idpoc1)
            assert(res.body.data[0]).to.have.property("percentage_fee").to.equal(datas.paymentOption.persenfee)
            assert(res.body.data[0]).to.have.property("fixed_fee").to.equal(0)
            assert(res.body.data[0]).to.have.property("contribution_fee").to.equal(datas.contribution.contriFee)
            assert(res.body.data[0]).to.have.property("total_tabarru").to.equal(total_tabaru1)
            assert(res.body.data[0]).to.have.property("total_ujrah").to.equal(total_ujrah1)
            assert(res.body.data[0]).to.have.property("total_fee").to.equal(persen_total_fee)
            assert(res.body.data[0]).to.have.property("total_payment").to.equal(P_total_payment)
            assert(res.body.data[0]).to.have.property("external_reference_id").exist
            assert(res.body.data[0]).to.have.property("status").exist
            assert(res.body.data[0]).to.have.property("paid_at")
            assert(res.body.data[0]).to.have.property("actions")
            assert(res.body.data[0].va_numbers[0]).to.have.property("bank").to.equal("permata")
            assert(res.body.data[0].va_numbers[0]).to.have.property("va_number").exist
            assert(res.body.data[0]).to.have.property("expired_at").exist
            
            
            
            
            });
            
            
        });
    });
});
