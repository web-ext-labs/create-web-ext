const fs = require('fs-extra')
const path = require('path');
const Lib = {};

Lib.copyIcon = dir => {
    console.log(copier('icons', 'icons', dir));
}

Lib.createBG = dir => {
    console.log(copier('background_script.js', 'background_script.js', dir));
}

Lib.createCS = dir => {
    console.log(copier('content_script.js', 'content_script.js', dir));
}

Lib.createBA = dir => {
    console.log(copier('popup', 'browserAction', dir));
}

Lib.createPA = dir => {
    console.log(copier('popup', 'pageAction', dir));
}

Lib.createOP = dir => {
    console.log(copier('popup', 'options', dir));
}

function copier(from, to, dir) {
    return fs.copySync(path.join(__dirname, '../', 'assets', from), path.join(dir, to));
}

module.exports = Lib;
