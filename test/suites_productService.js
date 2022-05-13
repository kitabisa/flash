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


describe('API Product Service', () => {
    describe('Create Service Product', () => {
        it(`${TC_create.positive.valid_data}`, async() => {
            const res = await create.createServiceGroup(datas.service_Group.code, datas.service_Group.name, datas.service_Group.description)   
            if(res.status !==200){
                console.log("create data : "+res.status+"||" +res.body.text)
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
            const res = await create.createServiceGroup('TEST66', 'Alda', 'this is triger from automation tools')
            assert(res.status).to.equal(500)

        });
        it(`${TC_create.negative.same_datacode}`, async() => {
            const res = await create.createServiceGroup('TEST66', datas.service_Group.name, datas.service_Group.description)
            assert(res.status).to.equal(500)
        });
    });
    describe('Get All Service Group', () => {
        it(`${TC_getall.positive.Getall}`, async() => {
            const res = await getAll.getallServiceGroup()
            if(res.status !==200){
                console.log("getall data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
            global.ids1 = res.body.data[1].id
            global.names1 = res.body.data[1].name
            global.desc1 = res.body.data[1].description
            global.codes1 = res.body.data[1].code
        });
    }); 
    describe('Get All Public Service Group ', () => {
        it(`${TC_getallPublic.positive.Getall}`, async() => {
            const res = await getAllpublic.getallpublicServiceGroup()
            if(res.status !==200){
                console.log("getall data : "+res.status+"||" +res.body.text)
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
            const res = await getdetailpublic.getdetailpublicServiceGroup(global.ids)
            if(res.status !==200){
                console.log("getdetailpublic data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_getdetailPublic.negative.wrongid}`, async () => {
            const res = await getdetailpublic.getdetailpublicServiceGroup(datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
            assert(res.body.response_desc).to.have.property("en")
        });
    });
    describe('Get Detail Service Group', () => {
        it(`${TC_getdetail.positive.Getall}`, async() => {
            const res = await getdetail.getdetailServiceGroup(global.ids)
            if(res.status !==200){
                console.log("getdetail data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_getdetail.negative.wrongid}`, async () => {
            const res = await getdetail.getdetailServiceGroup(datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
            assert(res.body.response_desc).to.have.property("id").to.equal("error data tidak ditemukan")
            assert(res.body.response_desc).to.have.property("en")
        });
    });
    describe('Update Service Product', () => {
        it(`${TC_update.positive.valid_data}`, async() => {
            const res = await update.updateServiceGroup(global.ids, datas.service_Group.code, datas.service_Group.name, datas.service_Group.description)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_code}`, async() => {
            const res = await update.updateServiceGroup(global.ids, datas.service_Group.code, global.names, global.desc)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_name}`, async() => {
            const res = await update.updateServiceGroup(global.ids, global.codes, datas.service_Group.name, global.desc)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.positive.different_desc}`, async() => {
            const res = await update.updateServiceGroup(global.ids, global.codes, global.names, datas.service_Group.description)   
            if(res.status !==200){
                console.log("update data : "+res.status+"||" +res.body.text)
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id")
            assert(res.body.data[0]).to.have.property("code")
            assert(res.body.data[0]).to.have.property("name")
            assert(res.body.data[0]).to.have.property("description")
            assert(res.body.data[0]).to.have.property("is_active")
        });
        it(`${TC_update.negative.same_data}`, async() => {
            const res = await update.updateServiceGroup(global.ids, global.codes1, global.names1, global.desc1)   
            assert(res.status).to.equal(500)
        });
        it(`${TC_update.positive.different_desc}`, async() => {
            const res = await update.updateServiceGroup(global.ids, global.codes1, datas.service_Group.name, datas.service_Group.description)   
            assert(res.status).to.equal(500)
            
        });

    });

    describe('Delete data Service Group', () => {
        it(`${TC_delete.positive.delete}`, async () => {
            const res = await deleted.deleteServiceGroup(global.ids)
            assert(res.status).to.equal(200)
        });
        it(`${TC_delete.negative.wrongid}`, async () => {
            const res = await deleted.deleteServiceGroup(datas.service_Group.wrongid)
            assert(res.status).to.equal(404)
        });
    });
});

