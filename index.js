#!/usr/bin/env node

const startHere = require('./src/start');
const pJson = require('./package.json');
const args = process.argv;

if(args.length > 2) {
    if(args[2] === '-v') {
        console.log(`create-web-ext version ${pJson.version}`);
        return true;
    } else {
        console.log(`create-web-ext do not require any argument`);
    }
}

startHere();
