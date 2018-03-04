
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const createManifest = require('./create-manifest');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What\'s the name of your package?'
    },
    {
      type: 'confirm',
      name: 'background_script',
      message: 'Would you like to add a background script?'
    }
  ])
  .then(answers => {
    createManifest(answers);
});