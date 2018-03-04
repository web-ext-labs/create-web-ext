const fs = require('fs-extra')
const path = require('path');
const jsonFormat = require('json-format');

const createManifest = function (payload) {
	fs.ensureDir(path.join(__dirname, payload.name))
		.then((dir) => {
			fs.outputFile(`${dir}/manifes.json`, jsonFormat(payload))
				.catch(err => { throw err });
		})
		.catch(err => { throw(err) });
};

module.exports = createManifest;