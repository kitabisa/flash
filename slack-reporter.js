const EVENTS = require('mocha').Runner.constants;
const NodeSlack = require('node-slack');
const PASS_MESSAGE = "\x1b[42mPASS\x1b[0m";
const FAIL_MESSAGE = "\x1b[41mFAIL\x1b[0m";
const SKIP_MESSAGE = "\x1b[43mSKIP\x1b[0m";

class SlackReporter {
  constructor(runner, options) {
    
    this.channel = "otp_kbsj";
    this.slack = new NodeSlack("https://hooks.slack.com/services/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");
    this.passes = 0;
    this.failures = 0;
    this.skips = 0;
    this.messages = [];

    runner.on(EVENTS.EVENT_SUITE_BEGIN, this.onSuiteBegin.bind(this));
    runner.on(EVENTS.EVENT_SUITE_END, this.onSuiteEnd.bind(this));
    runner.on(EVENTS.EVENT_TEST_BEGIN, this.onTestBegin.bind(this));
    runner.on(EVENTS.EVENT_TEST_PASS, this.onTestPass.bind(this));
    runner.on(EVENTS.EVENT_TEST_FAIL, this.onTestFail.bind(this));
    runner.on(EVENTS.EVENT_TEST_PENDING, this.onTestSkip.bind(this));
    runner.on(EVENTS.EVENT_RUN_END, this.onRunEnd.bind(this));

  }

  onSuiteBegin(suite) {
    console.log(`\n[ ${suite.title} ]\n`);
  }

  onSuiteEnd(suite) {
    // console.log(suite.title);
  }

  onTestBegin(test) {
    process.stdout.write(`- ${test.fullTitle()}`);
  }

  onTestPass(test) {
    process.stdout.write(` ${PASS_MESSAGE} ${test.duration} ms\n`);
    this.passes++;
  }

  onTestSkip(test) {
    process.stdout.write(`- ${test.fullTitle()} ${SKIP_MESSAGE}\n`);
    this.skips++;
  }

  onTestFail(test, err) {
    process.stdout.write(` ${FAIL_MESSAGE}\n`);
    console.log(err.message);
    this.failures++;
    this.messages.push({
      title: test.fullTitle(),
      text: err.message, 
    });
  }

  onRunEnd() {

    //console.log(`\n[FINISHED]\n`);
    //console.log(`Passed: ${this.passes} Failed: ${this.failures} Skiped: ${this.skips}`);

    const icon = this.failures == 0?":white_check_mark:":":boom:";
    const message = {
        channel: this.channel,
        text: `*Report API Kitajaga* ${icon}\n`,
          attachments: [ 
            {
              "color": "#2eb886",
              "fields": [
                {
                  "title": "Passed",
                  "value": this.passes,
                  "short": true
                },
                {
                  "title": "Failed",
                  "value": this.failures,
                  "text" : this.messages,
                  "short": true
                },
                {
                  "title": "Skiped",
                  "value": this.skips,
                  "short": true
                },
              ]
            }
          ]
            
    };

    this.slack.send(message);

  }
}

module.exports = SlackReporter;