
const fs = require('fs');
const path = require('path');

const createManifest = function (payload) {
  fs.mkdir(path.join(__dirname, payload.name), function(err, dir) {
    const manifestStream = fs.createWriteStream(path.join(__dirname, payload.name, 'manifest.json'));
    manifestStream.write(JSON.stringify(payload));
  })
};

module.exports = createManifest;