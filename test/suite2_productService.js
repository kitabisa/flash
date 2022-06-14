const assert = require('chai').expect;
const create = require('../object/servicegroup/create_ServiceGroup')
const update = require('../object/servicegroup/update_ServiceGroup')
const getAll = require('../object/servicegroup/getall_ServiceGroup')
const getdetailpublic = require('../object/servicegroup/getdetailpublic_ServiceGroup')
const getdetail = require('../object/servicegroup/getdetail_ServiceGroup')
const getAllpublic = require('../object/servicegroup/getallpublic_ServiceGroup')
const deleted = require('../object/servicegroup/delete_ServiceGroup')
const TC_create = require('../data/testcase/ServiceGroup/createServiceGroup.json')
const TC_update = require('../data/testcase/ServiceGroup/updateServiceGroup.json')
const TC_getall = require('../data/testcase/ServiceGroup/getallServiceGroup.json')
const TC_getallPublic = require('../data/testcase/ServiceGroup/getallpublicServiceGroup.json')
const TC_getdetailPublic = require('../data/testcase/ServiceGroup/getdetailpublicServiceGroup.json')
const TC_getdetail = require('../data/testcase/ServiceGroup/getdetailServiceGroup.json')
const TC_delete = require('../data/testcase/ServiceGroup/deleteServiceGroup.json')
const datas = require('../data/var')
const TC_create_EC = require('../data/testcase/ExtensionClause/createExtensionClause.json')
const TC_Getall_EC = require('../data/testcase/ExtensionClause/getalldataExtensionClause.json')
const TC_Getdetail_EC = require('../data/testcase/ExtensionClause/getdetailExtensionClause.json')
const TC_Delete_EC = require('../data/testcase/ExtensionClause/deleteExtensionClause.json')
const TC_Update_EC = require('../data/testcase/ExtensionClause/updateExtensionClause.json')
const TC_Search_EC = require('../data/testcase/ExtensionClause/searchExtensionClause.json')
const TC_create_DC = require('../data/testcase/Deductible/createDeduc.json')
const TC_Getall_DC = require('../data/testcase/Deductible/getalldataDeduc.json')
const TC_Getdetail_DC = require('../data/testcase/Deductible/getdetailDeduc.json')
const TC_Delete_DC = require('../data/testcase/Deductible/deleteDeduc.json')
const TC_Update_DC = require('../data/testcase/Deductible/updateDeduc.json')
const TC_Search_DC = require('../data/testcase/Deductible/searchDeduc.json')
const TC_create_contri = require('../data/testcase/ProductContribution/createContribution.json')
const TC_Getall_contri = require('../data/testcase/ProductContribution/getalldataContribution.json')
const TC_Getdetail_contri = require('../data/testcase/ProductContribution/getdetailContribution.json')
const TC_Delete_contri = require('../data/testcase/ProductContribution/deleteContribution.json')
const TC_Update_contri = require('../data/testcase/ProductContribution/updateContribution.json')
const EC_create = require('../object/ExtensionClause/create_ExtensionClause')
const EC_Getall = require('../object/ExtensionClause/getall_ExtensionClause')
const EC_Getdetail = require('../object/ExtensionClause/getdetail_ExtensionClause')
const EC_Delete = require('../object/ExtensionClause/delete_ExtensionClause')
const EC_Update = require('../object/ExtensionClause/update_ExtensionClause')
const EC_Search = require('../object/ExtensionClause/search_ExtensionClause')
const DC_create = require('../object/Deductible/create_Deductible')
const DC_Getall = require('../object/Deductible/getall_Deductible')
const DC_Getdetail = require('../object/Deductible/getdetail_Deductible')
const DC_Delete = require('../object/Deductible/delete_Deductible')
const DC_Update = require('../object/Deductible/update_Deductible')
const DC_Search = require('../object/Deductible/search_Deductible')
const contri_create = require('../object/productContribution/create_Contribution')
const contri_Getall = require('../object/productContribution/getall_Contribution')
const contri_Getdetail = require('../object/productContribution/getdetail_Contribution')
const contri_Delete = require('../object/productContribution/delete_Contribution')
const contri_Update = require('../object/productContribution/update_Contribution')



describe('API Service Group', () => {
    describe('Create Service Product', () => {
        it(`${TC_create.positive.valid_data}`, async() => {
            const res = await create.createServiceGroup(global.access_Tokens1, datas.service_Group.code, datas.service_Group.name, datas.service_Group.description, datas.service_Group.ujrah)   
            if(res.status !==200){
                console.log("create data : "+res.status+"||" +res.text)
            }         
            assert(res.status).to.equal(200)
            global.ids = res.body.data[0].id
            global.names = res.body.data[0].name
            global.desc = res.body.data[0].description
            global.codes = res.body.data[0].code
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_create.negative.existing_data}`, async() => {
            const res = await create.createServiceGroup(global.access_Tokens1, 'TEST66', 'Alda', 'this is triger from automation tools', datas.service_Group.ujrah)
            assert(res.status).to.equal(400)

        });
        it(`${TC_create.negative.same_datacode}`, async() => {
            const res = await create.createServiceGroup(global.access_Tokens1, 'TEST66', datas.service_Group.name, datas.service_Group.description, datas.service_Group.ujrah)
            assert(res.status).to.equal(400)
        });
    });
    describe('Get All Service Group', () => {
        it(`${TC_getall.positive.Getall}`, async() => {
            const res = await getAll.getallServiceGroup(global.access_Tokens1)
            if(res.status !==200){
                console.log("getall data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
            global.ids1 = res.body.data[1].id
            ids2 = res.body.data[2].id
            global.idsgforppo = res.body.data[3].id
            global.idsgpuchase = res.body.data[4].id
            global.names1 = res.body.data[1].name
            global.desc1 = res.body.data[1].description
            global.codes1 = res.body.data[1].code
            
        });
    }); 
    describe('Get All Public Service Group ', () => {
        it(`${TC_getallPublic.positive.Getall}`, async() => {
            const res = await getAllpublic.getallpublicServiceGroup(global.access_Tokens1)
            if(res.status !==200){
                console.log("getall data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
    });   
    describe('Get Detail Public Service Group', () => {
        it(`${TC_getdetailPublic.positive.Getall}`, async() => {
            const res = await getdetailpublic.getdetailpublicServiceGroup(global.access_Tokens1, global.ids)
            if(res.status !==200){
                console.log("getdetailpublic data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_getdetailPublic.negative.wrongid}`, async () => {
            const res = await getdetailpublic.getdetailpublicServiceGroup(global.access_Tokens1, datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
            assert(res.body.response_desc).to.have.property("en")
        });
    });
    describe('Get Detail Service Group', () => {
        it(`${TC_getdetail.positive.Getall}`, async() => {
            const res = await getdetail.getdetailServiceGroup(global.access_Tokens1, global.ids)
            if(res.status !==200){
                console.log("getdetail data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_getdetail.negative.wrongid}`, async () => {
            const res = await getdetail.getdetailServiceGroup(global.access_Tokens1, datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
            assert(res.body.response_desc).to.have.property("en")
        });
    });
    describe('Update Service Product', () => {
        it(`${TC_update.positive.valid_data}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids, datas.service_Group.code, datas.service_Group.name, datas.service_Group.description, datas.service_Group.ujrah)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_code}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids, datas.service_Group.code, global.names, global.desc, datas.service_Group.ujrah)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_name}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids, global.codes, datas.service_Group.name, global.desc, datas.service_Group.ujrah)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_desc}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids, global.codes, global.names, datas.service_Group.description, datas.service_Group.ujrah)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.negative.same_data}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids, global.codes1, global.names1, global.desc1, datas.service_Group.ujrah)   
            assert(res.status).to.equal(500)
        });
        it(`${TC_update.negative.same_datacode}`, async() => {
            const res = await update.updateServiceGroup(global.access_Tokens1, global.ids1, global.codes, datas.service_Group.name, datas.service_Group.description, datas.service_Group.ujrah)   
            assert(res.status).to.equal(500)
            
        });

    });

    describe('Delete data Service Group', () => {
        it(`${TC_delete.positive.delete}`, async () => {
            const res = await deleted.deleteServiceGroup(global.access_Tokens1, global.ids)
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete.negative.wrongid}`, async () => {
            const res = await deleted.deleteServiceGroup(global.access_Tokens1, datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
        });
    });

});

describe('API Extension Clause', () => {
    describe('Create ExtensionClause', () => {
        it(`${TC_create_EC.positive.valid_data}`, async () => {
            const res = await EC_create.createExtensionClause(global.access_Tokens1, datas.Extension_clause.code, datas.service_Group.name, datas.service_Group.description, global.codes)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id").to.equal(global.ids)
            assert(res.body.data[0]).to.have.property("service_group_code").to.equal(global.codes)
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active").to.equal(true)
            global.ECids = res.body.data[0].id
        });
    });
    describe('Get all data Extension Clause', () => {
        it(`${TC_Getall_EC.positive.Getall}`, async () => {
            const res = await EC_Getall.getallExtensionClause(global.access_Tokens1)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
            global.ECids1 = res.body.data[1].id
            global.ECserviceCode1 = res.body.data[1].service_group_code
            global.code1 = res.body.data[1].code
            global.name1 = res.body.data[1].name
            global.code2 = res.body.data[0].code
            global.name2 = res.body.data[0].name
            global.ECserviceCode2 = res.body.data[0].service_group_code
            global.desc2 = res.body.data[0].description
        });
    });
    describe('Delete data Extension Clause', () => {
        it(`${TC_Delete_EC.positive.delete}`, async () => {
            const res = await EC_Delete.deleteExtensionClause(global.access_Tokens1, global.ECids)
            assert(res.status).to.equal(200)
        });
        it(`${TC_Delete_EC.negative.wrongid}`, async () => {
            const res = await EC_Delete.deleteExtensionClause(global.access_Tokens1, datas.Extension_clause.wrongid)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc.id).to.equal('Product Extension Clause ID Tidak Ditemukan')
        });
    });  
    describe('Get Detail Extension Clause', () => {
        it(`${TC_Getdetail_EC.positive.Getall}`, async () => {
            const res = await EC_Getdetail.getdetailExtensionClause(global.access_Tokens1, global.ECids)
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").to.equal(global.ECids)
            assert(res.body.data[0]).to.have.property("service_group_id").to.equal(global.ids)
            assert(res.body.data[0]).to.have.property("service_group_code").to.equal(global.codes)
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active").to.equal(false)
        });
        it(`${TC_Getdetail_EC.negative.wrongid}`, async () => {
            const res = await EC_Getdetail.getdetailExtensionClause(global.access_Tokens1, datas.Extension_clause.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc.id).to.equal('error data tidak ditemukan')
        });
    });  
    describe('update data Extension Clause', () => {
        it(`${TC_Update_EC.positive.valid_data}`, async () => {
            const res =  await EC_Update.updateExtensionClause(global.access_Tokens1, global.ECids, global.code1, global.name1, datas.Extension_clause.description, global.ECserviceCode1)
            assert(res.status).to.equal(200)
        });
        
    });

    describe('Search data Extension Clause', () => {
        it(`${TC_Search_EC.positive.valid_data}`, async () => {
            const res =  await EC_Search.searchExtensionClause(global.access_Tokens1, global.ECserviceCode1, global.code1, global.name1)
            if(res.status !== 200){
                console.log("error search EC" +res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_Search_EC.negative.wrong_serviceGroup}`, async () => {
            const res =  await EC_Search.searchExtensionClause(global.access_Tokens1, datas.Extension_clause.invalid_service_group_code, global.code1, global.name1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property('id').to.equal('Product Search Extension Clause Data Tidak Ditemukan')
        });
        it(`${TC_Search_EC.negative.different_code}`, async () => {
            const res =  await EC_Search.searchExtensionClause(global.access_Tokens1, global.ECserviceCode1, global.code2, global.name1)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property('id').to.equal('Product Search Extension Clause Data Tidak Ditemukan')
        });
        it(`${TC_Search_EC.negative.different_name}`, async () => {
            const res =  await EC_Search.searchExtensionClause(global.access_Tokens1, global.ECserviceCode1, global.code1, global.name2)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property('id').to.equal('Product Search Extension Clause Data Tidak Ditemukan')
        });
    });
    describe('Create Deductible API', () => {
        it(`${TC_create_DC.positive.valid_data}`, async() => {
            const res = await DC_create.createDeductible(global.access_Tokens1, global.code2, global.name2, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method, datas.Deductible.calcu_value)
            if(res.status !== 200){
                console.log("failed :"+ res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code").to.equal(global.ECserviceCode2)
            assert(res.body.data[0]).to.have.property("code").to.equal(global.code2)
            assert(res.body.data[0]).to.have.property("name").to.equal(global.name2)
            assert(res.body.data[0]).to.have.property("calculation_method").to.equal("percentage")
            assert(res.body.data[0]).to.have.property("calculation_value").to.equal("400000.00")
            assert(res.body.data[0]).to.have.property("is_active")
            global.ids = res.body.data[0].id
        });
        it(`${TC_create_DC.negative.wrong_service_group}`, async () => {
            const res = await DC_create.createDeductible(global.access_Tokens1, global.code2, global.name2, global.desc2, datas.Deductible.service_code, datas.Deductible.calcu_method, datas.Deductible.calcu_value)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Product Service Group Code Tidak Ditemukan")
        });
        it(`${TC_create_DC.negative.wrong_Calculate_Method}`, async () => {
            const res = await DC_create.createDeductible(global.access_Tokens1, global.code2, global.name2, global.desc2, global.ECserviceCode2, datas.Deductible.wrong_calcu_method, datas.Deductible.calcu_value)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Calculation Method Salah")
        });
        it(`${TC_create_DC.negative.invalid_deduction_Value}`, async () => {
            const res = await DC_create.createDeductible(global.access_Tokens1, global.code2, global.name2, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method, datas.Deductible.invalid_calcu_value)
            assert(res.body.response_desc).to.have.property("id").to.equal("payload tidak valid")
        });
    });
    describe('Get all Deduction', () => {
        it(`${TC_Getall_DC.positive.Getall}`, async () => {
            const res = await DC_Getall.getDeductible(global.access_Tokens1)
            if(res.status !== 200){
                console.log("failed :"+ res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("calculation_method")
            assert(res.body.data[0]).to.have.property("calculation_value")
            assert(res.body.data[0]).to.have.property("is_active")
        });
    });
    describe('Get Detail Deduction', () => {
        it(`${TC_Getdetail_DC.positive.Getall}`, async () => {
            const res = await DC_Getdetail.getdetailDeductible(global.ids, global.access_Tokens1)
            if(res.status !== 200){
                console.log("failed :"+ res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("calculation_method")
            assert(res.body.data[0]).to.have.property("calculation_value")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_Getdetail_DC.negative.wrongid}`, async () => {
            const res = await DC_Getdetail.getdetailDeductible(datas.Deductible.wrong_idDeduc, global.access_Tokens1)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
        });
    });
    describe('Update Deduction Api', () => {
        it(`${TC_Update_DC.positive.valid_data}`, async () => {
            const res = await DC_Update.updateDeductible(global.access_Tokens1, global.ids, datas.Deductible.code, datas.Deductible.name, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method1, datas.Deductible.calcu_value)
            if(res.status !== 200){
                console.log("failed :"+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("calculation_method")
            assert(res.body.data[0]).to.have.property("calculation_value")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_Update_DC.negative.wrong_deducID}`, async () => {
            const res = await DC_Update.updateDeductible(global.access_Tokens1, datas.Deductible.wrong_idDeduc, datas.Deductible.code, datas.Deductible.name, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method, datas.Deductible.calcu_value)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Product Deductible ID Tidak Ditemukan")

        });
        it(`${TC_Update_DC.negative.wrong_calcuMethod}`, async () => {
            const res = await DC_Update.updateDeductible(global.access_Tokens1, global.ids, datas.Deductible.code, datas.Deductible.name, global.desc2, global.ECserviceCode2, datas.Deductible.wrong_calcu_method, datas.Deductible.calcu_value)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("Calculation Method Salah")

        });
        it(`${TC_Update_DC.negative.wrong_calcuvale}`, async () => {
            const res = await DC_Update.updateDeductible(global.access_Tokens1, global.ids, datas.Deductible.code, datas.Deductible.name, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method, datas.Deductible.invalid_calcu_value)
            assert(res.status).to.equal(400)
            assert(res.body.response_desc).to.have.property("id").to.equal("payload tidak valid")

        });
    });
    describe('Search Deduction Api', () => {
        it(`${TC_Search_DC.positive.valid_data}`, async () => {
            const res = await DC_Search.searchDeductible(global.access_Tokens1, global.code2, global.name2, global.desc2, global.ECserviceCode2, datas.Deductible.calcu_method, datas.Deductible.calcu_value)
            if(res.status !== 200){
                console.log("failed :"+ res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("service_group_code").to.equal(global.ECserviceCode2)
            assert(res.body.data[0]).to.have.property("code").to.equal(global.code2)
            assert(res.body.data[0]).to.have.property("name").to.equal(global.name2)
            assert(res.body.data[0]).to.have.property("calculation_method").to.equal("percentage")
            assert(res.body.data[0]).to.have.property("calculation_value").to.equal("400000.00")
            assert(res.body.data[0]).to.have.property("is_active")
        });
    });

    describe('Deleted Deduction APi', () => {
        it(`${TC_Delete_DC.positive.delete}`, async () => {
            const res = await DC_Delete.deleteDeductible(global.ids, global.access_Tokens1)
            if(res.status !== 200){
                console.log("failed :"+ res.text);
            }
            assert(res.status).to.equal(200)
        });
        it(`${TC_Delete_DC.negative.wrongid}`, async () => {
            const res = await DC_Delete.deleteDeductible(datas.Deductible.wrong_idDeduc, global.access_Tokens1)
            assert(res.status).to.equal(400)
            
        });
    });

    describe('Create Product Contribution', () => {
        it(`${TC_create_contri.positive.valid_data}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, datas.contribution.contriFee, datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("contribution_fee")
            assert(res.body.data[0]).to.have.property("contribution_month")
            assert(res.body.data[0]).to.have.property("display_name")
            assert(res.body.data[0]).to.have.property("is_active")
            assert(res.body.data[0]).to.have.property("is_popular")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("ord_position")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("strikethrough_contribution_fee")
        });
        it(`${TC_create_contri.negative.wrong_contriFee}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, 'seratus', datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee)
            assert(res.status).to.equal(400)
        });
        it(`${TC_create_contri.negative.wrong_contriMonth}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, datas.contribution.contriFee, 'datas.contribution.contriMonth', datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee)
            assert(res.status).to.equal(400)
        });
        it(`${TC_create_contri.negative.invalid_strikeFee}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, datas.contribution.contriFee, datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, 'datas.contribution.strikeFee')
            assert(res.status).to.equal(400)
        });
    });
    describe('Get all data Product Contribution', () => {
        it(`${TC_Getall_contri.positive.Getall}`, async () => {
            const res = await contri_Getall.getContribution(global.access_Tokens1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("contribution_fee")
            assert(res.body.data[0]).to.have.property("contribution_month")
            assert(res.body.data[0]).to.have.property("display_name")
            assert(res.body.data[0]).to.have.property("is_active")
            assert(res.body.data[0]).to.have.property("is_popular")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("ord_position")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("strikethrough_contribution_fee")
            contriId = res.body.data[0].id
            global.contripurchase = res.body.data[1].id
        });
    });
    describe('Get detail Product Contribution', () => {
        it(`${TC_Getdetail_contri.positive.Getall}`, async () => {
            const res = await contri_Getdetail.getdetailContribution(global.access_Tokens1, ids2)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("contribution_fee")
            assert(res.body.data[0]).to.have.property("contribution_month")
            assert(res.body.data[0]).to.have.property("display_name")
            assert(res.body.data[0]).to.have.property("is_active")
            assert(res.body.data[0]).to.have.property("is_popular")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("ord_position")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("strikethrough_contribution_fee")
        });
        it(`${TC_Getdetail_contri.negative.wrongid}`, async () => {
            const res = await contri_Getdetail.getdetailContribution(global.access_Tokens1, datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
        });
    });
    describe('Update data Product Contribution', () => {
        it(`${TC_Update_contri.positive.valid_data}`, async () => {
            const res = await contri_Update.updateContribution(global.access_Tokens1, datas.contribution.contriFee, datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.false, datas.contribution.isPopular.false, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee, contriId)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("contribution_fee")
            assert(res.body.data[0]).to.have.property("contribution_month")
            assert(res.body.data[0]).to.have.property("display_name")
            assert(res.body.data[0]).to.have.property("is_active")
            assert(res.body.data[0]).to.have.property("is_popular")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("ord_position")
            assert(res.body.data[0]).to.have.property("service_group_id")
            assert(res.body.data[0]).to.have.property("strikethrough_contribution_fee")
            
        });
        it(`${TC_Update_contri.negative.wrong_contriFee}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, 'seratus', datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee)
            assert(res.status).to.equal(400)
        });
        it(`${TC_Update_contri.negative.wrong_contriMonth}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, datas.contribution.contriFee, 'datas.contribution.contriMonth', datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, datas.contribution.strikeFee)
            assert(res.status).to.equal(400)
        });
        it(`${TC_Update_contri.negative.invalid_strikeFee}}`, async () => {
            const res = await contri_create.createContribution(global.access_Tokens1, datas.contribution.contriFee, datas.contribution.contriMonth, datas.productpaymentOption.displayNme, datas.productpaymentOption.isactive.true, datas.contribution.isPopular.true, datas.paymentOption.name, datas.productpaymentOption.oder_opt, ids2, 'datas.contribution.strikeFee')
            assert(res.status).to.equal(400)
        });
    });
    describe('Delete Product Contribution', () => {
        it(`${TC_Delete_contri.positive.delete}`, async () => {
            const res = await contri_Delete.deleteContribution(global.access_Tokens1, contriId)
            assert(res.status).to.equal(200)
        });
        it(`${TC_Delete_contri.negative.wrongid}`, async () => {
            const res = await contri_Delete.deleteContribution(global.access_Tokens1, datas.productpaymentOption.wrongID)
            assert(res.status).to.equal(400)
        });

    });
});
