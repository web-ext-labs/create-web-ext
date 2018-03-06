#!/usr/bin/env node

const init = require('./src/init')
const packageConfig = require('./package.json')
const args = process.argv

if (args.length > 2) {
  if (args[2] === '-v') {
    console.log(`create-web-ext v${packageConfig.version}`)
  } else {
    console.log('create-web-ext does not require any argument!')
  }
  return false
}

init()
