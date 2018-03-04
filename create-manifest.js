const fs = require('fs-extra')
const path = require('path');
const jsonFormat = require('json-format');

const createManifest = function (payload) {
	fs.ensureDir(path.join(__dirname, payload.name))
		.then(dir => {
			return fs.outputFile(`${dir}/manifest.json`, jsonFormat(payload));
		})
		.catch(err => console.log(err));
};

module.exports = createManifest;