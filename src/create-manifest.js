const fs = require('fs-extra')
const path = require('path')
const formatJSON = require('json-format')
const fsUtil = require('./fs-util')

const createManifest = function (payload) {
  const manifestJson = {
    'manifest_version': 2,
    'name': payload.name || 'My extension',
    'description': payload.description || 'description',
    'version': payload.version || '1.1.1',
    'icons': {
      '64': 'icons/icon.png'
    }
  }

  const currentPath = process.cwd()
  const name = payload.name.replace(/[`~!@#$ %^&*()_|+\-=÷¿?;:'",.<>{}[\]\\/]/gi, '').toLowerCase()
  /* eslint-disable-next-line prefer-promise-reject-errors */
  if (name === '') return Promise.reject('Please provide correct extension name.')
  const folderPath = path.join(currentPath, name)

  return fs.ensureDir(folderPath)
    .then(dir => {
      dir = dir || folderPath
      fsUtil.copyIcon(dir)

      if (payload.background_script) {
        manifestJson.background = {
          'scripts': ['background_script.js']
        }
        fsUtil.createBackgroundScript(dir)
      }

      if (payload.content_script) {
        manifestJson.content_scripts = [
          {
            'matches': ['*://*.mozilla.org/*'],
            'js': ['content_script.js']
          }
        ]
        fsUtil.createContentScript(dir)
      }

      if (payload.browser_action) {
        manifestJson.browser_action = {
          'default_icon': {
            '64': 'icons/icon.png'
          },
          'default_popup': 'browserAction/index.html',
          'default_title': manifestJson.name
        }
        fsUtil.createBrowserAction(dir)
      }

      if (payload.page_action) {
        manifestJson.page_action = {
          'default_icon': {
            '64': 'icons/icon.png'
          },
          'default_popup': 'pageAction/index.html',
          'default_title': manifestJson.name
        }
        fsUtil.createPageAction(dir)
      }

      if (payload.options_ui) {
        manifestJson.options_ui = {
          'page': 'options/index.html'
        }
        fsUtil.createOptionsUI(dir)
      }

      return fs.outputFile(`${dir}/manifest.json`, formatJSON(manifestJson))
        .then(s => '✨  Done.')
    })
    .catch(e => ('Something went wrong'))
}

module.exports = createManifest
