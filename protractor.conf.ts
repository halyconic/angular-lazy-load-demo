exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:3000/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/e2e-tsconfig.json'
    });
  }
};