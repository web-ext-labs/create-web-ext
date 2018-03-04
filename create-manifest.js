const fs = require('fs-extra')
const path = require('path');
const jsonFormat = require('json-format');
const Lib = require('./Lib');

const createManifest = function (payload) {
	const manifestJson = {
		"manifest_version": 2,
		"name": payload.name || 'my addon',
		"description": payload.description || 'description',
		"version": payload.version || '1.1.1',
		"icons": {
			"64": "icons/icon.png"
		}
	};

	fs.ensureDir(path.join(__dirname, payload.name))
		.then(dir => {

			Lib.copyIcon(dir);

			if(payload.background_script) {
				manifestJson.background_script = 'background_script.js';
				Lib.createBG(dir);
			}

			if(payload.content_script) {
				manifestJson.content_scripts = [
					{
						"matches": ["*://*.mozilla.org/*"],
						"js": ["content_script.js"]
					}
				];
				Lib.createCS(dir);
			}

			if(payload.browser_action) {
				manifestJson.browser_action = {
					"default_icon": {
						"64": "icons/icon.png"
					},
					"default_popup": "browserAction/index.html",
					"default_title": manifestJson.name,
				};
				Lib.createBA(dir);
			}

			if(payload.page_action) {
				manifestJson.page_action = {
					"default_icon": {
						"64": "icons/icon.png"
					},
					"default_popup": "pageAction/index.html",
					"default_title": manifestJson.name,
				};
				Lib.createPA(dir);
			}

			if(payload.options_ui) {
				manifestJson.options_ui = {
					"page": "options/index.html",
				};
				Lib.createPA(dir);
			}

			return fs.outputFile(`${dir}/manifest.json`, jsonFormat(manifestJson));
		})
		.catch(console.log);
	return Promise.resolve('success');
};

module.exports = createManifest;
