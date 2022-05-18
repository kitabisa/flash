const assert = require('chai').expect;
const exchange_token = require('../../object/account_svc/exchange_token');
const querystring = require('querystring');

const axios = require('axios');

describe('Exchange Token API', () => {
    before(async function kulonuwun() {
        axios.get('http://kulonuwun.ktbs.xyz/oauth/token',
        querystring.stringify({
            username: 'kitajaga-test@kitajaga.id',
            password: 'somepassword',
            grant_type: 'password',
            client_id: 'e336cdf1aaecca7043b219cc2ab587ff',
            client_secret: 'c0c094732fd2bb23342a161284a4e0ca'
        }), {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
            console.log('Status Code:', res.status);

            const rd = res.data;

            global.ktbs_token = rd[0].access_token
        })
        .catch(err => {
            console.log('Error: ', err.message);
        });
    });

    it('valid data', async ()  => {
        const res = await exchange_token.exchange_token(global.ktbs_token);
        if(res.status !== 200){
            console.log("exchange_token: "+res.status+"||" +res.body.response_desc.id)
        }
        assert(res.status).to.equal(200);
        assert(res.body.data[0]).to.have.property('access_token')
        assert(res.body.data[0]).to.have.property('refresh_token')
        assert(res.body.data[0]).to.have.property('expires_in')
    });
})