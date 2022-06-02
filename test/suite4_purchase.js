const assert = require('chai').expect;
const createHD =  require('../object/purchase/create_HD') 
const createkyc =  require('../object/purchase/create_KYC') 
const createbenef =  require('../object/purchase/create_beneficiary') 
const createnewPurchase =  require('../object/purchase/create_newPurchase') 
const getSummary =  require('../object/purchase/get_Summary')
//const uuid = require('../object/purchase/uuid')
const datas = require('../data/var')


describe('Purchase Service API', () => {
    describe('Create Health Declaration', () => {
        it('', async () => {
            //let uuids = uuid
            const res = await createHD.createHD(global.access_Tokens1, global.contripurchase, datas.purchase.age.true, datas.purchase.job.true, datas.purchase.medical.true, global.idsgpuchase, datas.purchase.type, datas.purchase.uuids)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            console.log(res.text);
            idpurcahse = res.body.data[0].purchase_id
        });
    }); 
    describe('Create KYC', () => {
        it('', async () => {
            const res = await createkyc.createKYC(global.access_Tokens1, datas.KYC.dob, datas.KYC.fullname, datas.KYC.ktp, datas.KYC.phone, datas.purchase.uuids, idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
        });
    }); 
    describe('Create Beneficiary', () => {
        it('', async () => {
            const res = await createbenef.createBeneficiary(global.access_Tokens1, datas.KYC.dob, datas.KYC.fullname, datas.benef.inform.true, datas.KYC.ktp, datas.KYC.phone, datas.benef.relation, datas.purchase.uuids, idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
        });
    });
    describe('Create Payment', () => {
        it('', async () => {
            const res = await createnewPurchase.createnewpurchase(global.access_Tokens1, true, idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
        });
    }); 
    describe('Get Data Summary', () => {
        before(function (done) {
            this.timeout(180000);
            done();
           });
        
        it('', async () => {
            const res = await getSummary.getSummary(global.access_Tokens1, idpurcahse)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            console.log(res.text);

        });
    });
});
