const assert = require('chai').expect;
const datas = require('../data/var')
const calcu = require('../object/calculate/calculation')
const TC_CalcuFixfee = require('../data/testcase/calculation/fixfee.json')
const TC_Calcupersenfee = require('../data/testcase/calculation/persenfee.json')



describe('API Calculation Service', () => {
    describe('Get Calculate Payment', () => {
        before(async function calucated() {
            persenfee = datas.paymentOption.persenfee / 100
            console.log("persenfee :"+persenfee);
            fixfee = datas.paymentOption.fixfee
            totalFeepersen = datas.calcu.contributeFee  * persenfee
            totalFeefixfee = fixfee
            totalpayment = datas.calcu.contributeFee + totalFeepersen
            totalpayment1 = datas.calcu.contributeFee + totalFeefixfee
        });
        it(`${TC_CalcuFixfee.positive.fixfee}`, async() => {
            const res = await calcu.calcu(global.access_Tokens1, datas.calcu.contributeFee, global.ppoid)
            if(res.status !== 200) {
                console.log("failed  : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("total_fee").to.equal(totalFeefixfee)
            assert(res.body.data[0]).to.have.property("total_payment").to.equal(totalpayment1)
            assert(res.body.data[0]).to.have.property("contribution_fee").to.equal(datas.calcu.contributeFee)
            //console.log(res.text);
        });
        it(`${TC_Calcupersenfee.positive.persentagefee}`, async() => {
            const res = await calcu.calcu(global.access_Tokens1, datas.calcu.contributeFee, datas.calcu.ppoidpersen)
            if(res.status !== 200) {
                console.log("failed  : "+res.text);
            }
            //console.log(res.text);
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("total_fee").to.equal(totalFeepersen)
            assert(res.body.data[0]).to.have.property("total_payment").to.equal(totalpayment)
            assert(res.body.data[0]).to.have.property("contribution_fee").to.equal(datas.calcu.contributeFee)
            
        });
    });
});
