'use strict';

const inquirer = require('inquirer');
const fs = require('fs');
const createManifest = require('./create-manifest');

inquirer
    .prompt([{
            type: 'input',
            name: 'name',
            message: 'What\'s the name of your add-on?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of the add-on?'
        },
        {
            type: 'input',
            name: 'version',
            message: 'Version of your add-on?'
        },
        {
            type: 'confirm',
            name: 'background_script',
            message: 'Would you like to add a background script?'
        },
        {
            type: 'confirm',
            name: 'content_script',
            message: 'Would you like to add a content script?'
        },
        {
            type: 'confirm',
            name: 'browser_action',
            message: 'Would you like to add a browser action?'
        },
        {
            type: 'confirm',
            name: 'page_action',
            message: 'Would you like to add a page action?'
        }


    ])
    .then(answers => {
        createManifest(answers);
    });