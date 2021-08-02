const cypress = require('cypress');

const cypressConfig = {

    video: false,
    browser: 'chrome',
    config: {
        integrationFolder: 'cypress/integration/**'
    },
    env : {
        allure: true
    }
};

const cypressCucumberConfig = {
    ...cypressConfig,
    ...{
        config: {
            integrationFolder: 'cypress/integration/**',
            ignoreTestFiles: '*.js',
            testFiles: '**/*.{feature, features}'
        }
    }
}

(async () => {
    await cypress.run(cypress.cypressConfig);
    await cypress.run(cypress.cypressCucumberConfig);
})();