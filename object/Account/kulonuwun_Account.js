const querystring = require('querystring');
const axios = require('axios');

const kulonuwunAccount = () => axios.post(process.env.kulonuwunService_URL + '/oauth/token',
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


module.exports = {kulonuwunAccount}