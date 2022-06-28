const assert = require('chai').expect;
const createHD =  require('../object/purchase/create_HD') 
const createkyc =  require('../object/purchase/create_KYC') 
const createbenef =  require('../object/purchase/create_beneficiary') 
const createnewPurchase =  require('../object/purchase/create_newPurchase') 
const getSummary =  require('../object/purchase/get_Summary')
const TC_cretaeKYC = require('../data/testcase/puchase/createKYC.json')
const TC_cretaeHD = require('../data/testcase/puchase/createHD.json')
const TC_cretaeBenef = require('../data/testcase/puchase/createBenef.json')
const TC_cretaePay = require('../data/testcase/puchase/createpayment.json')
const TC_getSummary = require('../data/testcase/puchase/GetSummary.json')
const datas = require('../data/var')
const date = require('../object/date')

describe('Purchase Service API', () => {
    describe('Create Health Declaration', () => {
        it(`${TC_cretaeHD.positive.valid_data}`, async () => {
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.true, datas.purchase.job.true, datas.purchase.medical.true, global.serviceids, datas.purchase.type)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
            assert(res.body.data[0]).to.have.property('service_group_id').exist
            assert(res.body.data[0]).to.have.property('user_id').exist
            assert(res.body.data[0]).to.have.property('contribution_id').exist
            assert(res.body.data[0]).to.have.property('type').to.equal('FIRST_TIME')
            assert(res.body.data[0]).to.have.property('status').to.equal('DRAFT_HEALTH_DECLARATION')
            assert(res.body.data[0].health_declaration_json).to.have.property('age').exist
            assert(res.body.data[0].health_declaration_json).to.have.property('medical').exist
            assert(res.body.data[0].health_declaration_json).to.have.property('job').exist
            global.idpurcahse = res.body.data[0].purchase_id
            //console.log("ini purchase id : "+global.idpurcahse
            
        });
        it(`${TC_cretaeHD.positive.valid_data}`, async () => {
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.true, datas.purchase.job.true, datas.purchase.medical.true, global.serviceids1, datas.purchase.type)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
            assert(res.body.data[0]).to.have.property('service_group_id').exist
            assert(res.body.data[0]).to.have.property('user_id').exist
            assert(res.body.data[0]).to.have.property('contribution_id').exist
            assert(res.body.data[0]).to.have.property('type').to.equal('FIRST_TIME')
            assert(res.body.data[0]).to.have.property('status').to.equal('DRAFT_HEALTH_DECLARATION')
            assert(res.body.data[0].health_declaration_json).to.have.property('age').exist
            assert(res.body.data[0].health_declaration_json).to.have.property('medical').exist
            assert(res.body.data[0].health_declaration_json).to.have.property('job').exist
            global.idpurcahse1 = res.body.data[0].purchase_id
            //console.log("ini purchase id : "+global.idpurcahse
            
        });
        it(`${TC_cretaeHD.negative.AgeFalse}`, async () => {
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.false, datas.purchase.job.true, datas.purchase.medical.true, global.idsgpuchase, datas.purchase.type)
            assert(res.status).to.equal(400)
        })
        it(`${TC_cretaeHD.negative.JobFalse}`, async () => {
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.true, datas.purchase.job.false, datas.purchase.medical.true, global.idsgpuchase, datas.purchase.type)
            assert(res.status).to.equal(400)
        })
        it(`${TC_cretaeHD.negative.MedicalFalse}`, async () => {
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.true, datas.purchase.job.true, datas.purchase.medical.false, global.idsgpuchase, datas.purchase.type)
            assert(res.status).to.equal(400)
        })
    }); 
    describe('Create KYC', () => {
        it(`${TC_cretaeKYC.positive.valid_data}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, date.validdobs, datas.KYC.email, datas.KYC.fullname, datas.KYC.ktp, datas.KYC.phone, global.idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('dob').exist
            assert(res.body.data[0]).to.have.property('fullname').exist
            assert(res.body.data[0]).to.have.property('ktp').exist
            assert(res.body.data[0]).to.have.property('phone_number').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
            
        });
        it(`${TC_cretaeKYC.positive.valid_data}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, date.validdobs, datas.KYC.email, datas.KYC.fullname, datas.KYC.ktp, datas.KYC.phone, global.idpurcahse1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('dob').exist
            assert(res.body.data[0]).to.have.property('fullname').exist
            assert(res.body.data[0]).to.have.property('ktp').exist
            assert(res.body.data[0]).to.have.property('phone_number').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
            
        });
        it(`${TC_cretaeKYC.negative.minDob}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, date.minDobs, datas.KYC.email, datas.KYC.fullname, datas.KYC.ktp, datas.KYC.phone, global.idpurcahse)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Kamu harus berusia 18 - 55 tahun untuk jadi anggota")
        });
        it(`${TC_cretaeKYC.negative.maxDob}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, date.maxDobs, datas.KYC.email, datas.KYC.fullname, datas.KYC.ktp, datas.KYC.phone, global.idpurcahse)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Kamu harus berusia 18 - 55 tahun untuk jadi anggota")

        });
        it(`${TC_cretaeKYC.negative.maxKtp}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, datas.KYC.valid_dob, datas.KYC.email, datas.KYC.fullname, datas.KYC.max_ktp, datas.KYC.phone, global.idpurcahse)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").exist
        });
        it(`${TC_cretaeKYC.negative.minKtp}`, async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, datas.KYC.valid_dob, datas.KYC.email, datas.KYC.fullname, datas.KYC.min_ktp, datas.KYC.phone, global.idpurcahse)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").exist
        });
    }); 
    describe('Create Beneficiary', () => {
        it(`${TC_cretaeBenef.positive.valid_data}`, async () => {
            const res = await createbenef.createBeneficiary(global.access_Tokens1, datas.KYC.dob, datas.KYC.fullname, datas.benef.inform.true, datas.KYC.ktp, datas.KYC.phone, datas.benef.relation, global.idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('dob').exist
            assert(res.body.data[0]).to.have.property('fullname').exist
            assert(res.body.data[0]).to.have.property('ktp').exist
            assert(res.body.data[0]).to.have.property('phone_number').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
         
        });
        it(`${TC_cretaeBenef.positive.valid_data}`, async () => {
            const res = await createbenef.createBeneficiary(global.access_Tokens1, datas.KYC.dob, datas.KYC.fullname, datas.benef.inform.true, datas.KYC.ktp, datas.KYC.phone, datas.benef.relation, global.idpurcahse1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('dob').exist
            assert(res.body.data[0]).to.have.property('fullname').exist
            assert(res.body.data[0]).to.have.property('ktp').exist
            assert(res.body.data[0]).to.have.property('phone_number').exist
            assert(res.body.data[0]).to.have.property('purchase_id').exist
         
        });
    });
    describe('Create Payment', () => {
        it(`${TC_cretaePay.positive.donationTrue}`, async () => {
            const res = await createnewPurchase.createnewpurchase(global.access_Tokens1, true, global.idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('status').to.equal('PURCHASED')
            assert(res.body.data[0]).to.have.property('donate_excess_contribution').exist
        });
        it(`${TC_cretaePay.positive.donationTrue}`, async () => {
            const res = await createnewPurchase.createnewpurchase(global.access_Tokens1, true, global.idpurcahse1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('status').to.equal('PURCHASED')
            assert(res.body.data[0]).to.have.property('donate_excess_contribution').exist
        });
        it(`${TC_cretaePay.negative.donationFalse}`, async () => {
            const res = await createnewPurchase.createnewpurchase(global.access_Tokens1, false, global.idpurcahse)
            assert(res.status).to.equal(400)
        })
    }); 
    describe('Get Data Summary', () => {
        it(`${TC_getSummary.positive.valid_data}`, async () => {
            const res = await getSummary.getSummary(global.access_Tokens1, global.idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property('id').exist
            assert(res.body.data[0]).to.have.property('service_group_id').exist
            assert(res.body.data[0]).to.have.property('user_id').exist
            assert(res.body.data[0]).to.have.property('contribution_id').exist
            assert(res.body.data[0]).to.have.property('status').exist
            assert(res.body.data[0]).to.have.property('type').exist
            assert(res.body.data[0]).to.have.property('donate_excess_contribution').exist
            

        });
        it(`${TC_getSummary.negative.wrong_purchaseID}`, async () => {
            const res = await getSummary.getSummary(global.access_Tokens1, datas.paymentOption.wrongID)
            assert(res.status).to.equal(400)
        });

    });
});
