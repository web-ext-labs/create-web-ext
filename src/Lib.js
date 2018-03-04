const fs = require('fs-extra')
const path = require('path');
const Lib = {};

Lib.copyIcon = dir => {
    copier('icons', 'icons', dir);
}

Lib.createBG = dir => {
    copier('background_script.js', 'background_script.js', dir);
}

Lib.createCS = dir => {
    copier('content_script.js', 'content_script.js', dir);
}

Lib.createBA = dir => {
    copier('popup', 'browserAction', dir);
}

Lib.createPA = dir => {
    copier('popup', 'pageAction', dir);
}

Lib.createOP = dir => {
    copier('popup', 'options', dir);
}

function copier(from, to, dir) {
    return fs.copySync(path.join(__dirname, '../', 'assets', from), path.join(dir, to));
}

module.exports = Lib;
