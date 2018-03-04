#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const createManifest = require('./create-manifest');

const startHere = () => {
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
                default: '1.1.1'
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
                message: 'Would you like to add a extensions option?',
                default: false
            }
        ])
        .then(answers => {
            createManifest(answers);
        });
}

module.exports = startHere;
