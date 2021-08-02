/// <reference types="@shelex/cypress-allure-plugin" />
/// <reference types="cypress" />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs-extra')
const path = require('path');

const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');


// ** Read config file from config folder
function getConfigByFile (file) {
  const pathToCongFile = path.resolve('cypress/', 'config', `${file}.json`)
  return fs.readJson(pathToCongFile)
}


/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config  
  on('file:preprocessor', cucumber())

  addMatchImageSnapshotPlugin(on, config);
  allureWriter(on, config);  
  // initPlugin(on, config);

  on('task', {
    log(message) {
      console.log(message)

      return null
    },
    table(message) {
      console.table(message)

      return null
    }
  })

  const file = config.env.configFile ?? 'staging';

  return getConfigByFile(file); 
}