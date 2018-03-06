const inquirer = require('inquirer')
const createManifest = require('./create-manifest')

const init = () => {
  inquirer
    .prompt([{
      type: 'input',
      name: 'name',
      message: `What's the name of your add-on?`,
      default: 'My extension'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of the add-on?'
    },
    {
      type: 'input',
      name: 'version',
      message: 'Version of your add-on?',
      default: '1.1.1',
      validate: function(value) {
      var pass = value.match((\d*\.)+\d*);
      if (pass) {
        return true;
      }

      return 'Please enter a valid version number';
}
    },
    {
      type: 'confirm',
      name: 'background_script',
      message: 'Would you like to add a background script?',
      default: false
    },
    {
      type: 'confirm',
      name: 'content_script',
      message: 'Would you like to add a content script?',
      default: false
    },
    {
      type: 'confirm',
      name: 'browser_action',
      message: 'Would you like to add a browser action?',
      default: false
    },
    {
      type: 'confirm',
      name: 'page_action',
      message: 'Would you like to add a page action?',
      default: false
    },
    {
      type: 'confirm',
      name: 'options_ui',
      message: `Would you like to add extensions' option?`,
      default: false
    }
    ])
    .then(answers => {
      createManifest(answers)
    })
}

module.exports = init
