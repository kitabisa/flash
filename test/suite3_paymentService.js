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
const create_PPO = require('../object/productPaymentOption/create_PO')
const getAll_PPO = require('../object/productPaymentOption/getall_PO')
const getAll_PPOsgid = require('../object/productPaymentOption/getall_POsgid')
const getDetail_PPO = require('../object/productPaymentOption/getdetail_PO')
const update_PPO = require('../object/productPaymentOption/update_PO')
const delete_PPO = require('../object/productPaymentOption/delete_PO')
const getaPage = require('../object/paymentOption/getall_OptionPage')
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
const TC_create_ppo = require ('../data/testcase/ProductPaymentOption/createPPO.json')
const TC_getall_ppo = require('../data/testcase/ProductPaymentOption/getalldataPPO.json')
const TC_getall_pposgid = require('../data/testcase/ProductPaymentOption/getalldataPPOsgid.json')
const TC_getdetail_ppo = require('../data/testcase/ProductPaymentOption/getdetailPPO.json')
const TC_update_ppo = require('../data/testcase/ProductPaymentOption/updatePPO.json')
const TC_delete_ppo = require('../data/testcase/ProductPaymentOption/deletePPO.json')
const datas = require('../data/var')

describe('Payment Api Service', () => {
    describe('Create Payment Provider', () => {
        it(`${TC_create_provider.positive.valid_data}`, async () => {
            const res = await create_Provider.createPaymentProvider(global.access_Tokens1, datas.paymentProvider.callback_url, datas.paymentProvider.code, datas.service_Group.description, datas.paymentProvider.name)
            if(res.status !==200){
            console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("code").exist
            assert(res.body.data[0]).to.have.property("name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("callback_url").to.equal(datas.paymentProvider.callback_url)
            providerids = res.body.data[0].id
        });
    });
    describe('Get all Payment Provider', () => {
        it(`${TC_getall_provider.positive.Getall}`, async () => {
            const res = await getAll_Provider.getPaymentProvider(global.access_Tokens1)
            if(res.status !==200){
            console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("code").exist
            assert(res.body.data[0]).to.have.property("name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("callback_url").exist
            id1 = res.body.data[1].id
            
        });
    });
    describe('Get detail payment provider', () => {
        it(`${TC_getdetail_provider.positive.Getall}`, async () => {
            const res = await getDetail_Provider.getdetailPaymentProvider(global.access_Tokens1, providerids)
            if(res.status !==200){
            console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
        });
        it(`${TC_getdetail_provider.negative.wrongid}`, async () => {
            const res = await getDetail_Provider.getdetailPaymentProvider(global.access_Tokens1, datas.paymentProvider.wrongID)
            assert(res.status).to.equal(500)
        });
    });
    describe('Update Payment Provider', () => {
        it(`${TC_update_provider.positive.valid_data}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens1, providerids, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            if(res.status !==200){
            console.log("Failed :"+res.text);
            }
            assert(res.status).to.equal(200)
        });
        it(`${TC_update_provider.negative.wrong_PPID}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens1, datas.paymentProvider.wrongID, datas.paymentProvider.callback_url, datas.paymentProvider.wrongCode, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(400)
        });
        it(`${TC_update_provider.negative.existing_code}`, async () => {
            const res = await update_Provider.updatePaymentProvider(global.access_Tokens1, id1, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(400)
        });
        it(`${TC_update_provider.negative.invalid_auth}`, async () => {
            const res = await update_Provider.updatePaymentProvider(datas.paymentProvider.invalid_auth, id1, datas.paymentProvider.callback_url, datas.paymentProvider.code1, datas.service_Group.description, datas.paymentProvider.name)
            assert(res.status).to.equal(401)
        });
    });
    describe.skip('Delete payment Provider API', () => {
        it(`${TC_delete_provider.positive.delete}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens1, id1, datas.paymentProvider.type_soft)
            if(res.status !== 200){
            console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)            
        });
        it(`${TC_delete_provider.negative.wrongid}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens1, datas.paymentProvider.wrongID, datas.paymentProvider.type_soft)
            assert(res.status).to.equal(400)
            //console.log(global.access_Tokens1);
        });
        it(`${TC_delete_provider.negative.invalid_type}`, async () => {
            const res = await delete_Provider.deletePaymentProvider(global.access_Tokens1, id1, datas.paymentProvider.type_invalid)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("payload tidak valid")
        });
    });

    describe('Create Payment Option API', () => {
        it(`${TC_create_option.positive.valid_data}`, async () => {
            const bankName =  ["gopay", "shopeepay", "qris"]
            for (let x in bankName) {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, 'EWALLET', datas.Deductible.description, datas.paymentOption.fixfee, bankName[x], 0, providerids)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("name").to.equal(bankName[x])
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("provider_id").exist
            assert(res.body.data[0]).to.have.property("percentage_fee").exist
            assert(res.body.data[0]).to.have.property("fixed_fee").exist
            assert(res.body.data[0]).to.have.property("category").exist
            global.idpaoption = res.body.data[0].id
            }
            //console.log("ini id payment option : "+global.idpaoption);
        });
        //idpaoption = res.body.data[0].id
        
        it(`${TC_create_option.positive.valid_data}`, async () => {
            const bankName =  ["bni", "mandiri", "cimb", "bca", "bri", "maybank", "permata", "mega"]
            for (let x in bankName) {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, "BANK_TRANSFER", datas.Deductible.description, 0 , bankName[x] , datas.paymentOption.persenfee , id1)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("name").to.equal(bankName[x])
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("provider_id").exist
            assert(res.body.data[0]).to.have.property("percentage_fee").exist
            assert(res.body.data[0]).to.have.property("fixed_fee").exist
            assert(res.body.data[0]).to.have.property("category").exist
            global.idpaoption1 = res.body.data[0].id
            }

        });
        it(`${TC_create_option.negative.wrong_category}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, datas.paymentOption.wrong_category, datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,0 , id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("kategori tidak valid")
        });
        it(`${TC_create_option.negative.invalid_providerid}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, 0 , datas.paymentOption.name ,datas.paymentOption.persenfee, datas.paymentOption.wrongID)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("id payment provider tidak ada")
        });
        it(`${TC_create_option.negative.invalid_persenfee}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.wrongpersenfee, id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_create_option.negative.invalid_fixfee}`, async () => {
            const res = await create_Option.createPaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, datas.paymentOption.wrongfixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
    });
    describe('Get all payment option', () => {
        it(`${TC_getall_option.positive.Getall}`, async () => {
            const res = await getAll_Option.getPaymentOption(global.access_Tokens1)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("provider_id").exist
            assert(res.body.data[0]).to.have.property("percentage_fee").exist
            assert(res.body.data[0]).to.have.property("fixed_fee").exist
            assert(res.body.data[0]).to.have.property("category").exist
            idpo = res.body.data[0].id
            idpo1 = res.body.data[1].id
            idpo2 = res.body.data[2].id
            idpo3 = res.body.data[3].id
            //console.log(idpo);
            //console.log(idpo1);
            //console.log(idpo2);
        });
    });

    describe('Get Payment Option Page', () => {
        it('', async() => {
            const res = await getaPage.getPaymentOptionPage(global.access_Tokens1, global.idsgforppo)
            assert(res.status).to.equal(200)

        });
    });
    describe('Get Detail payment option', () => {
        it(`${TC_getdetail_option.positive.Getall}`, async () => {
            const res = await getDetail_Option.getdetailPaymentOption(global.access_Tokens1, idpo)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("provider_id").exist
            assert(res.body.data[0]).to.have.property("percentage_fee").exist
            assert(res.body.data[0]).to.have.property("fixed_fee").exist
            assert(res.body.data[0]).to.have.property("category").exist
        });
        it(`${TC_getdetail_option.negative.wrongid}`, async () => {
            const res = await getDetail_Option.getdetailPaymentOption(global.access_Tokens1, datas.paymentOption.wrongID)
            assert(res.status).to.equal(404)
        });
    });
    describe('Update Payment Option', () => {
        it(`${TC_update_option.positive.valid_data}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "EWALLET", datas.Deductible.description, 0 , datas.paymentOption.name ,datas.paymentOption.persenfee, id1, idpo)
            assert(res.status).to.equal(200)
        });
        it(`${TC_update_option.positive.valid_data}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "BANK_TRANSFER", datas.Deductible.description, datas.paymentOption.fixfee , datas.paymentOption.name , 0 , id1, idpo)
            assert(res.status).to.equal(200)
        });
        it(`${TC_update_option.negative.wrong_PPID}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, 0 , datas.paymentOption.name ,datas.paymentOption.persenfee, datas.paymentOption.wrongID, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("id payment provider tidak ada")
        });
        it(`${TC_update_option.negative.wrong_persenFee}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name ,datas.paymentOption.wrongpersenfee, datas.paymentOption.wrongID, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_update_option.negative.wrong_fixFee}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, datas.paymentOption.wrongfixfee, datas.paymentOption.name ,datas.paymentOption.persenfee, id1, idpo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("invalid/incomplete request payload")
        });
        it(`${TC_update_option.negative.wrong_POid}`, async () => {
            const res = await update_Option.updatePaymentOption(global.access_Tokens1, "VA", datas.Deductible.description, datas.paymentOption.fixfee, datas.paymentOption.name , 0 , id1, datas.paymentOption.wrongID)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("data tidak ditemukan")
        });
    });
    describe.skip('Delete Payment Option', () => {
        it(`${TC_delete_option.positive.soft_delete}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens1, idpo1, "soft_delete")
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete_option.positive.hard_delete}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens1, idpo3, "hard_delete")
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete_option.negative.wrongid}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens1, datas.paymentOption.wrongID, "hard_delete")
            assert(res.status).to.equal(404)
        });
        it(`${TC_delete_option.negative.invalid_type}`, async () => {
            const res = await delete_Option.deletePaymentOption(global.access_Tokens1, idpo2, "hards_delete")
            assert(res.status).to.equal(400)

        });
    });
    describe('Create Product Payment Option', () => {
        it(`${TC_create_ppo.positive.valid_data}`, async () => {
            const res = await create_PPO.createProductPaymentOption(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.productpaymentOption.oder_opt, global.idpaoption, global.serviceids)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
            global.ppoid = res.body.data[0].id
            global.payment_option_id = res.body.data[0].payment_option_id
            global.service_group_id = res.body.data[0].service_group_id
            //console.log("ini ppoids : "+global.ppoid);
            //console.log("ini payment_option_id : "+global.payment_option_id);
            //console.log("ini service_group_id : "+global.service_group_id);
        });
        //cos backend cant cross validation, so not any validation for service group
        it.skip(`${TC_create_ppo.negative.invalid_SGid}`, async () => {
            const res = await create_PPO.createProductPaymentOption(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.productpaymentOption.oder_opt, idpo, datas.productpaymentOption.wrongID)
            assert(res.status).to.equal(200)
            
        });
        it(`${TC_create_ppo.negative.invalid_poID}`, async () => {
            const res = await create_PPO.createProductPaymentOption(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.productpaymentOption.oder_opt, datas.paymentOption.wrongID, global.idsgforppo)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id")
            
        });
    });
    describe('Get all Product Payment Option', () => {
        it(`${TC_getall_ppo.positive.Getall}`, async () => {
            const res = await getAll_PPO.getProductPaymentOption(global.access_Tokens1)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
            idppo0 = res.body.data[0].id
            idppo1 = res.body.data[1].id
            idppo2 = res.body.data[2].id
        });
    });
    describe('Get all Product Payment Option with Service Group Id', () => {
        it(`${TC_getall_pposgid.positive.Getall}`, async () => {
            const res = await getAll_PPOsgid.getProductPaymentOptionsgid(global.access_Tokens1, global.serviceids)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
            idppo = res.body.data[0].id
        });
        it(`${TC_getall_pposgid.negative.invalid_sgid}`, async () => {
            const res = await getAll_PPOsgid.getProductPaymentOptionsgid(global.access_Tokens1, datas.productpaymentOption.wrongID)
            assert(res.status).to.equal(200)
        });    
    });
    describe('Get detail Product Payment Option', () => {
        it(`${TC_getdetail_ppo.positive.Getall}`, async () => {
            const res = await getDetail_PPO.getdetailProductPaymentOption(global.access_Tokens1, idppo)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
        });
        it(`${TC_getdetail_ppo.negative.wrongid}`, async () => {
            const res = await getDetail_PPO.getdetailProductPaymentOption(global.access_Tokens1, datas.productpaymentOption.wrongID)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("data tidak ditemukan")

            
        })
    });
    describe('Update Product Payment Option', () => {
        it(`${TC_update_ppo.positive.valid_data}`, async () => {
            const res = await update_PPO.updateProductPaymentProvider(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.false, datas.productpaymentOption.oder_opt, global.payment_option_id, global.service_group_id, global.ppoid)
            if (res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
        });
        it(`${TC_update_ppo.positive.valid_data}`, async () => {
            const res = await update_PPO.updateProductPaymentProvider(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.productpaymentOption.oder_opt, global.payment_option_id, global.service_group_id, global.ppoid)
            if (res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("display_name").exist
            assert(res.body.data[0]).to.have.property("description").exist
            assert(res.body.data[0]).to.have.property("is_active").exist
            assert(res.body.data[0]).to.have.property("ord_position").exist
            assert(res.body.data[0]).to.have.property("payment_option_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").exist
        });
        it(`${TC_update_ppo.negative.wrong_PPOID}`, async () => {
            const res = await update_PPO.updateProductPaymentProvider(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.false, datas.productpaymentOption.oder_opt, idpo, idsgforppo, datas.productpaymentOption.wrongID)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("data tidak ditemukan")
        })
        //this case why i give status 200, cos this API will be return array
        it.skip(`${TC_update_ppo.negative.wrong_SGid}`, async () => {
            const res = await update_PPO.updateProductPaymentProvider(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.false, datas.productpaymentOption.oder_opt, idpo, datas.service_Group.wrongid, idppo)
            assert(res.status).to.equal(200)
        })
        it(`${TC_update_ppo.negative.wrong_POid}`, async () => {
            const res = await update_PPO.updateProductPaymentProvider(global.access_Tokens1, datas.Deductible.description, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.false, datas.productpaymentOption.oder_opt, datas.paymentOption.wrongID, idsgforppo, idppo)
            assert(res.status).to.equal(400)
        })
    });
    describe.skip('Delete Product Payment Option', () => {
        it(`${TC_delete_ppo.positive.soft_delete}`, async () => {
            const res = await delete_PPO.deleteProductPaymentOption(global.access_Tokens1, idppo1, "soft_delete")
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete_ppo.positive.hard_delete}`, async () => {
            const res = await delete_PPO.deleteProductPaymentOption(global.access_Tokens1, idppo2, "hard_delete")
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete_ppo.negative.wrongid}`, async () => {
            const res = await delete_PPO.deleteProductPaymentOption(global.access_Tokens1, datas.productpaymentOption.wrongID, "hard_delete")
            assert(res.status).to.equal(404)
        });
        it(`${TC_delete_ppo.negative.invalid_type}`, async () => {
            const res = await delete_PPO.deleteProductPaymentOption(global.access_Tokens1, idppo, "hard_deletes")
            assert(res.status).to.equal(400)
        });
    });
    
});