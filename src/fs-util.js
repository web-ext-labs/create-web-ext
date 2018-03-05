const fs = require('fs-extra')
const path = require('path')
const fsUtil = {}

const copier = (from, to, dir) => {
  return fs.copySync(path.join(__dirname, 'assets', from), path.join(dir, to))
}

fsUtil.copyIcon = dir => {
  copier('icons', 'icons', dir)
}

fsUtil.createBackgroundScript = dir => {
  copier('background_script.js', 'background_script.js', dir)
}

fsUtil.createContentScript = dir => {
  copier('content_script.js', 'content_script.js', dir)
}

fsUtil.createBrowserAction = dir => {
  copier('popup', 'browserAction', dir)
}

fsUtil.createPageAction = dir => {
  copier('popup', 'pageAction', dir)
}

fsUtil.createOptionsUI = dir => {
  copier('popup', 'options', dir)
}

module.exports = fsUtil
