var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


//protractor.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 60000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature',
  ],


  baseURL: 'http://localhost:8080/',

  onPrepare: function () {

          browser.manage().window().maximize();
          browser.manage().timeouts().implicitlyWait(50000);
          global.expect = chai.expect;
      },

  cucumberOpts: {
    //require: 'features/step_definitions/*.steps.js',
    require: [
        'features/step_definitions/*.js',
        'features/support/hook.js',
        'features/support/env.js',
        //'features/support/hookhtml.js'
    ],

    format: ['json:reports/cucumber-test-results.json', 'pretty'],
    tags: '@Search',
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};
