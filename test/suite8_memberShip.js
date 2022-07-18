const {Builder, By, until, Key} = require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');
const chrome = require('selenium-webdriver/chrome');
const card = require('../object/memberShip/memberCard')
const assert = require('chai').expect;

describe('simulation Payment using permata', function() {
    before(async function aouttoken()  {
        const screen = {
            width: 1024,
            height: 768
          };
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().headless().windowSize(screen)).build();
            
        try {
            await driver.get('https://simulator.sandbox.midtrans.com/permata/va/index');
            await driver.findElement(By.id('inputMerchantId')).sendKeys(global.va_num);
            await driver.findElement(By.xpath("//button[normalize-space()='Inquire']")).click();
            await driver.findElement(By.xpath("//button[normalize-space()='Bayar']")).click()
            await driver.sleep(2000)
            
        } finally {
            await driver.quit();
        }
    }
    )
    this.timeout( 30000 )
    it('Get Membership card from service group id', async() => {
        const res = await card.memberCard(global.access_Tokens1, global.serviceids1)
            if(res.status !== 200){
                console.log("failed : "+res.text);
            }
            assert(res.status).to.equal(200)
            assert(res.body.data[0]).to.have.property("id").exist
            assert(res.body.data[0]).to.have.property("user_id").exist
            assert(res.body.data[0]).to.have.property("service_group_id").to.equal(global.MserviceId)
            assert(res.body.data[0]).to.have.property("membership_card_id").exist
            assert(res.body.data[0]).to.have.property("external_member_id").exist
            assert(res.body.data[0]).to.have.property("external_created_time").exist
            assert(res.body.data[0]).to.have.property("policy_no").to.equal("8009000050100049")
            assert(res.body.data[0]).to.have.property("total_period_months").exist
            assert(res.body.data[0]).to.have.property("period_start_at").exist
            assert(res.body.data[0]).to.have.property("period_end_at").exist
            assert(res.body.data[0]).to.have.property("contribution_month").exist
            assert(res.body.data[0]).to.have.property("waiting_period_days").exist
            assert(res.body.data[0]).to.have.property("grace_period_days").to.equal("15")
            assert(res.body.data[0]).to.have.property("grace_period_start_at")
            assert(res.body.data[0]).to.have.property("grace_period_end_at")
            assert(res.body.data[0]).to.have.property("status").exist
            assert(res.body.data[0]).to.have.property("start_at").exist
            assert(res.body.data[0]).to.have.property("end_at").exist
            assert(res.body.data[0]).to.have.property("recurring_no").exist
            
    });
});