const faker = require('faker');
let firstName = faker.name.firstName();
let uuids = faker.datatype.uuid();
let code = Math.floor(Math.random() * 90000);
let final_Code = "SG" +code
let final_Codes = "EC" +code
let final_Codes1 = "Deduc" +code
let final_Codes2 = "PP" +code
let final_Codes3 = "PPr" +code
let wrongCode = "ppw" +code
let final_Codes4 = "PO" +code

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
        "calcu_method" : "Percentage",
        "calcu_method1" : "Fix",
        "calcu_value" : 400000,
        "service_code" : "TEST6220",
        "wrong_calcu_method" : "Percentag",
        "invalid_calcu_value" : "400000",
        "wrong_idDeduc" : "f4276c49-556b-40ae-9e25-286747cc9430"
    },
    "paymentProvider" : {
        "callback_url" : "https://kitabisa.github.io/flash/",
        "code" : final_Codes2,
        "code1" :final_Codes3,
        "name" : firstName,
        "wrongID" : "47125462-2e9f-4a01-ae19-3074cd935ffw",
        "wrongCode" : wrongCode,
        "invalid_auth" : "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1bXhfUFZiQ3lTV2o5SG5MRHJ0bEJ3X1BLTnlFcVJtWTNpQ3BSMTBlMFpvIn0.eyJleHAiOjE2NTM2MTYwMjUsImlhdCI6MTY1MzU4MDAyNSwianRpIjoiMDFjNTY3ZjItOTY1OS00ODY1LThhMGMtMGEwMDQ2OTgxMjVkIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLnN0Zy5rdC5qZy9hdXRoL3JlYWxtcy9raXRhamFnYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzZjRkNzg4Zi0zMjZjLTRmYmItYmMwNy1hZTM0ZmRiOTZjMjAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJrb25nIiwic2Vzc2lvbl9zdGF0ZSI6IjVkOWViZjk3LTJkMjMtNDNlZS1iYjllLTY2ZDg1M2Y3YTlkMyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1raXRhamFnYSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI1ZDllYmY5Ny0yZDIzLTQzZWUtYmI5ZS02NmQ4NTNmN2E5ZDMiLCJraXRhYmlzYV91c2VyX2lkIjoiMjIxMDIyMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJraXRhYmlzYV9zZWNvbmRhcnlfaWQiOiIxMGU2NTY4MjU5Y2ZjNDIzYWE0NWExMThmYTYwZjllYyIsInByZWZlcnJlZF91c2VybmFtZSI6ImFyaW8xNkBnbWFpbC5jb20iLCJlbWFpbCI6ImFyaW8xNkBnbWFpbC5jb20ifQ.bn_1w41SzsvV3iDpvV0mUmX4zaU9McDuYWlN9t_Kb8QkXXVgHcv3Han9VgYkgjShZs0qRp1TzDXW6W4XiXraSzUG4pfO5q0eQKXO21KEPDDZtmtHv3d6qpEF-BjKADFJ0h1HO9K2KcvaaftfKDvqGIatJExlODSPGC_MUbJWiCVo-Et9Rkv_NAmCFlsBXsaoAcaDyxzEhUxBxC1AJDKPXT7sSpS2Hd4B9qgZLkpNFP7jaBhVX73rc18hS4lIocbtK9sN3Tr3MP9htnfW3aHDrmWtSR5yDhR9DCx3-F6K7uKoKNSLcXCju6y6QXS9Tw4cT1EDHGv-JKYus5vuF-4kXw",
        "type_soft" : "soft_delete",
        "type_hard" : "hard_delete",
        "type_invalid" : "soft_deleted"

    },
    "paymentOption" : {
        "fixfee" : 1000,
        "persenfee" : 20,
        "name" : firstName,
        "wrong_category" : "kartukredit",
        "wrongfixfee" : "1000",
        "wrongpersenfee" : "20",
        "wrongID" : "3a42f04f-5a89-4509-aa49-3e537dcb2131"

    },
    "productpaymentOption" : {
        "displayNme" : "testing cuys",
        "isactive" : {
            "true" : true,
            "false" : false
        },
        "oder_opt" : 2,
        "wrongID" : "7bf354e6-66ae-4acf-b52b-ab5ac6a14be1"
    },
    "contribution" : {
            "contriFee" : 1000,
            "contriMonth" : 2500,
            "isPopular" : {
                "true" : true,
                "false" : false
            },
            "strikeFee" : 500
    },
    "purchase" : {
        "uuids" : uuids,
        "age" : {
            "true" : true,
            "false" : false
        },
        "job" : {
            "true" : true,
            "false" : false
        },
        "medical" : {
            "true" : true,
            "false" : false
        },
        "type" : "FIRST_TIME"

    },
    "KYC" : {
        "min_dob" : "2005-12-03",
        "max_dob" : "1966-12-01",
        "dob" : "2004-12-01",
        "ktp" : "3223121807750090",
        "max_ktp" : "32231218077500902",
        "min_ktp" : "32231218077500",
        "phone" : "081283712812",
        "fullname" : "qa testing api automation"

    },
    "benef" : {
        "relation" : "PASANGAN",
        "inform" : {
            "true" : true,
            "false" : false
         }
    }



}