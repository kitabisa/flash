const assert = require('chai').expect;
const create_Provider = require('../object/paymetProvider/create_Provider')
const getAll_Provider = require('../object/paymetProvider/getall_Provider')
const getDetail_Provider = require('../object/paymetProvider/getdetail_Provider')
const update_Provider = require('../object/paymetProvider/update_Provider')
const delete_Provider = require('../object/paymetProvider/delete_Provider')
const create_Option = require('../object/paymentOption/create_Option')
const getAll_Option = require('../object/paymentOption/getall_Option')
const getDetail_Option = require('../object/paymentOption/getdetail_Option')
const update_Option = require('../object/paymentOption/update_Option')
const delete_Option = require('../object/paymentOption/delete_Option')
const TC_create_provider = require ('../data/testcase/PaymentProvider/createProvider.json')
const TC_getall_provider = require('../data/testcase/PaymentProvider/getalldataProvider.json')
const TC_getdetail_provider = require('../data/testcase/PaymentProvider/getdetailProvider.json')
const TC_update_provider = require('../data/testcase/PaymentProvider/updateProvider.json')
const TC_delete_provider = require('../data/testcase/PaymentProvider/deleteProvider.json')
const TC_create_option = require ('../data/testcase/PaymentOption/createOption.json')
const TC_getall_option = require('../data/testcase/PaymentOption/getalldataOption.json')
const TC_getdetail_option = require('../data/testcase/PaymentOption/getdetailOption.json')
const TC_update_option = require('../data/testcase/PaymentOption/updateOption.json')
const TC_delete_option = require('../data/testcase/PaymentOption/deleteOption.json')
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
        it(`${TC_update_provider.negative.invalid_auth}`, async () => {
            const res = await update_Provider.updatePaymentProvider(datas.paymentProvider.invalid_auth, id1, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(401)
        });
    });
    describe('Delete payment Provider API', () => {
        it(`${TC_delete_provider.positive.delete}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens, ids, datas.paymentProvider.type_soft)
            if(res.status !== 200){
            console.log("failed : "+res.text);
            }
            console.log(ids);
            assert(res.status).to.equal(200)            
        });
        it(`${TC_delete_provider.negative.wrongid}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens, datas.paymentProvider.wrongID)
            assert(res.status).to.equal(400)
            //console.log(global.access_Tokens);
        });
        it(`${TC_delete_provider.negative.invalid_type}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens, ids, datas.paymentProvider.type_invalid)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("payload tidak valid")
        });
    });

    describe('Create Payment Option API', () => {
        it(`${TC_create_option.positive.valid_data}`, async () => {
            const category =  ["VA", "BANK_TRANSFER", "EWALLET", "CREDITCARD"]
            for (let x in category) {
            const res = await create_Option.createPaymentOption(global.access_Tokens, category[x], datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("provider_id")
            assert(res.body.data[0]).to.have.property("percentage_fee")
            assert(res.body.data[0]).to.have.property("fixed_fee")
            assert(res.body.data[0]).to.have.property("category").to.equal(category[x])         
            }
        });
        it(`${TC_create_option.negative.wrong_category}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens, datas.paymentOption.wrong_category, datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("kategori tidak valid")
        });
        it(`${TC_create_option.negative.invalid_providerid}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, datas.paymentOption.wrongID)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("id payment provider tidak ada")
        });
        it(`${TC_create_option.negative.invalid_persenfee}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.wrongpersenfee, id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_create_option.negative.invalid_fixfee}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.wrongfixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
    });
    describe('Get all payment option', () => {
        it(`${TC_getall_option.positive.Getall}`, async () => {
            const res = await getAll_Option.getPaymentOption(global.access_Tokens)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("provider_id")
            assert(res.body.data[0]).to.have.property("percentage_fee")
            assert(res.body.data[0]).to.have.property("fixed_fee")
            assert(res.body.data[0]).to.have.property("category")
            idpo = res.body.data[0].id
            idpo1 = res.body.data[1].id
            idpo2 = res.body.data[2].id
        });
    });
    describe('Get Detail payment option', () => {
        it(`${TC_getdetail_option.positive.Getall}`, async () => {
            const res = await getDetail_Option.getdetailPaymentOption(global.access_Tokens, idpo)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("provider_id")
            assert(res.body.data[0]).to.have.property("percentage_fee")
            assert(res.body.data[0]).to.have.property("fixed_fee")
            assert(res.body.data[0]).to.have.property("category")
        });
        it(`${TC_getdetail_option.negative.wrongid}`, async () => {
            const res = await getDetail_Option.getdetailPaymentOption(global.access_Tokens, datas.paymentOption.wrongID)
            assert(res.status).to.equal(404)
        });
    });
    describe('Update Payment Option', () => {
        it(`${TC_update_option.positive.valid_data}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens, "EWALLET", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1, idpo)
            assert(res.status).to.equal(200)
        });
        it(`${TC_update_option.negative.wrong_PPID}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, datas.paymentOption.wrongID, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("id payment provider tidak ada")
        });
        it(`${TC_update_option.negative.wrong_persenFee}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.wrongpersenfee, datas.paymentOption.wrongID, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_update_option.negative.wrong_fixFee}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.wrongfixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_update_option.negative.wrong_POid}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1, datas.paymentOption.wrongID)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("data tidak ditemukan")
        });
    });
    describe('Delete Payment Option', () => {
        it(`${TC_delete_option.positive.soft_delete}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens, idpo, "soft_delete")
            assert(res.status).to.equal(200)
            console.log(res.text);
        });
        it(`${TC_delete_option.positive.hard_delete}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens, idpo1, "hard_delete")
            assert(res.status).to.equal(200)
            console.log("ini hard"+res.text);
        });
        it(`${TC_delete_option.negative.wrongid}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens, datas.paymentOption.wrongID, "hard_delete")
            assert(res.status).to.equal(404)
        });
        it(`${TC_delete_option.negative.invalid_type}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens, idpo2, "hards_delete")
            assert(res.status).to.equal(400)

        });
    });
});