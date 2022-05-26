const assert = require('chai').expect;
const create_Provider = require('../object/paymetProvider/create_Provider')
const getAll_Provider = require('../object/paymetProvider/getall_Provider')
const getDetail_Provider = require('../object/paymetProvider/getdetail_Provider')
const update_Provider = require('../object/paymetProvider/update_Provider')
const delete_Provider = require('../object/paymetProvider/delete_Provider')
const TC_create_provider = require ('../data/testcase/PaymentProvider/createProvider.json')
const TC_getall_provider = require('../data/testcase/PaymentProvider/getalldataProvider.json')
const TC_getdetail_provider = require('../data/testcase/PaymentProvider/getdetailProvider.json')
const TC_update_provider = require('../data/testcase/PaymentProvider/updateProvider.json')
const TC_delete_provider = require('../data/testcase/PaymentProvider/deleteProvider.json')
const datas = require('../data/var')

describe('Payment Api Service', () => {
    describe('Create Payment Provider', () => {
        it(`${TC_create_provider.positive.valid_data}`, async () => {
            const res = await create_Provider.createPaymentProvider(global.access_Tokens, datas.paymentProvider.callback_url, datas.paymentProvider.code, datas.service_Group.description, datas.paymentProvider.name)
            if(res.status !==200){
                console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("callback_url").to.equal(datas.paymentProvider.callback_url)
        });
    });
    describe('Get all Payment Provider', () => {
        it(`${TC_getall_provider.positive.Getall}`, async () => {
            const res = await getAll_Provider.getPaymentProvider(global.access_Tokens)
            if(res.status !==200){
                console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("callback_url")
            ids = res.body.data[0].id
            id1 = res.body.data[1].id
            console.log(ids);
        });
    });
    describe('Get detail payment provider', () => {
        it(`${TC_getdetail_provider.positive.Getall}`, async () => {
            const res = await getDetail_Provider.getdetailPaymentProvider(global.access_Tokens, ids)
            if(res.status !==200){
                console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
        });
        it(`${TC_getdetail_provider.negative.wrongid}`, async () => {
            const res = await getDetail_Provider.getdetailPaymentProvider(global.access_Tokens, datas.paymentProvider.wrongID)
            assert(res.status).to.equal(500)
        });
    });
    describe('Update Payment Provider', () => {
        it(`${TC_update_provider.positive.valid_data}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens, ids, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            if(res.status !==200){
                console.log("Failed :"+res.text);
            }
            assert(res.status).to.equal(200)
        });
        it(`${TC_update_provider.negative.wrong_PPID}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens, datas.paymentProvider.wrongID, datas.paymentProvider.callback_url, datas.paymentProvider.wrongCode, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(400)
        });
        it(`${TC_update_provider.negative.existing_code}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens, id1, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(400)
        });
    });
});