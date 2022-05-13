const faker = require('faker');

let firstName = faker.name.firstName();
let code = Math.floor(Math.random() * 10000);
let final_Code = "test" +code
module.exports = {
    "service_Group":
    {
        "code" : final_Code,
        "name" : firstName,
        "description" : "this is triger from automation tools",
        "wrongid" : "3c85c823-6656-4ecd-9506-c944db53ecb1"
    }
}