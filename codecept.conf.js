const fs = require('fs').promises;

function clearFolders() {
  try {
    fs.rm('output', { recursive: true, force: true });
  } catch (error) {
  }
}

exports.config = {
  tests: './tests/*test.js',
  output: './output',
  timeout: 60,
  name: 'nowina project',
  helpers: {
    Playwright: {
      url: 'https://dss.nowina.lu',
      show: false,
      browser: 'chromium',
      ignoreHTTPSErrors: true,
    },
  },
  bootstrap() {
    clearFolders();
  },
  include: {
    validationPage: './pages/validation_page.js',
    resultsPage: './pages/results_page.js',
    constants: './pages/constants.js'
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: './step_definitions/*_steps.js',
  },
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output',
    },
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: "output",
      require: '@codeceptjs/allure-legacy',
    },
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {
      enabled: false,
    },
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true,
      output: './output',
      deleteSuccessful: false,
    }
  }
};
