const assert = require('chai').expect;
const exchange_token = require('../object/Account/exchangetoken_Account');
const wong = require('../object/Account/wong_Account');
const ACC_ExchangeToken = require('../data/testcase/Account/exchangeTokenAccount')
describe('Exchange Token API', () => {
    before(async function pre_request() {
        const rd = await wong.wongAccount()
        console.log('Status Code:', rd.status);

        const res = rd.body.data[0]

        global.ktbs_token = res.token
    });

    it(`${ACC_ExchangeToken.positive.valid_token}`, async ()  => {
        const res = await exchange_token.exchangeTokenAccount(global.ktbs_token);
        if(res.status !== 200){
            console.log("exchange_token: " + res.status + "||" + res.text)
        }
        assert(res.status).to.equal(200);
        assert(res.body.data[0]).to.have.property('access_token')
        assert(res.body.data[0]).to.have.property('refresh_token')
        assert(res.body.data[0]).to.have.property('expires_in')
    });

    it(`${ACC_ExchangeToken.negative.wrong_token}`, async() => {
        const res = await exchange_token.exchangeTokenAccount('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1bXhfUFZiQ3lTV2o5SG5MRHJ0bEJ3X1BLTnlFcVJtWTNpQ3BSMTBlMFpvIn0.eyJleHAiOjE2NTI4OTEwNTEsImlhdCI6MTY1Mjg1NTA1MSwianRpIjoiYmMwMzhiZWUtYzNhNi00YjYxLTlkZjMtYmQ3NjExZWQwMTI0IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLnN0Zy5rdC5qZy9hdXRoL3JlYWxtcy9raXRhamFnYSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwNTY5ZjM5NS1iZWUxLTQxMzItOWYzZS1lZDM3ODAyMzY2ODMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJrb25nIiwic2Vzc2lvbl9zdGF0ZSI6ImYwZWU1YzI3LTliODYtNDg1Mi1iYmE2LTI1M2ZkN2RlZDFkMCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1raXRhamFnYSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmMGVlNWMyNy05Yjg2LTQ4NTItYmJhNi0yNTNmZDdkZWQxZDAiLCJraXRhYmlzYV91c2VyX2lkIjoiNSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiS2l0YWphZ2EgVGVzdCBBamEiLCJraXRhYmlzYV9zZWNvbmRhcnlfaWQiOiI1NDk0ZTg3ODQ2MTJjMWY1ZDNhODI4ZjAyYWNkNzRmNSIsInBob25lX251bWJlciI6IjYyODEyMzQ1Njc4OTAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJraXRhamFnYS10ZXN0QGtpdGFqYWdhLmlkIiwiZ2l2ZW5fbmFtZSI6IktpdGFqYWdhIiwiZmFtaWx5X')
        assert(res.status).to.equal(502)

    });

    it(`${ACC_ExchangeToken.negative.empty_token}`, async() => {
        const res = await exchange_token.exchangeTokenAccount('')
        assert(res.status).to.equal(401)
    });
})