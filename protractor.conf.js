var chromeOptions = {
  args: ['--headless', '--disable-gpu']
}


if (process.env.GOOGLE_CHROME_BINARY) {
  chromeOptions.binary = process.env.GOOGLE_CHROME_BINARY;
}


exports.config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: chromeOptions
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: ['features/*.feature'],

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
}
