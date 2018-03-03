#!/usr/bin/env node

var program = require('commander');

program
    .arguments('<file>')
    .option('-c, --name <name>', 'Name of the webextension')
    .option('-d, --description <description>', 'Description of webextension')
    .action(function(file) {
        console.log('user: %s pass: %s file: %s',
            program.name, program.description, file);
    })
    .parse(process.argv);