const faker = require('faker');

let firstName = faker.name.firstName();
let code = Math.floor(Math.random() * 10000);
let final_Code = "SG" +code
let final_Codes = "EC" +code
let final_Codes1 = "Deduc" +code
module.exports = {
    "service_Group":
    {
        "code" : final_Code,
        "name" : firstName,
        "description" : "this is triger from automation tools",
        "wrongid" : "3c85c823-6656-4ecd-9506-c944db53ecb1"
    },
    "Extension_clause":
    {
        "code" : final_Codes,
        "name" : firstName,
        "description" : "this is triger from automation tools",
        "wrongid" : "9afe872e-9bb2-4ae1-9f11-e078e21c94a1",
        "invalid_service_group_code" : "TEST6220"
    },
    "Deductible" : 
    {
        "code" : final_Codes1,
        "name" : firstName,
        "description" : "this is triger from automation tools",
        "calcu_method" : "Deducpay",
        "calcu_value" : "automation tools"
    }

}