const inquirer = require('inquirer')
const createManifest = require('./create-manifest')

const init = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'name',
      message: `Addon name `,
      default: 'My extension'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description '
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version ',
      default: '0.0.1',
      validate: val => {
        if (val.match(/^(\d+\.)?(\d+\.)?(\*|\d+)$/i)) return true
        return 'Please enter a valid version'
      }
    },
    {
      type: 'confirm',
      name: 'background_script',
      message: 'Include background script?',
      default: false
    },
    {
      type: 'confirm',
      name: 'content_script',
      message: 'Include content script?',
      default: false
    },
    {
      type: 'confirm',
      name: 'browser_action',
      message: 'Include browser action?',
      default: false
    },
    {
      type: 'confirm',
      name: 'page_action',
      message: 'Include page action?',
      default: false
    },
    {
      type: 'confirm',
      name: 'options_ui',
      message: `Include addon options?`,
      default: false
    }
    ])
    .then(answers => {
      return createManifest(answers)
    })
    .then(console.log)
    .catch(console.log)
}

module.exports = init
