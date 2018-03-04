const fs = require('fs-extra')
const Lib = {};

Lib.copyIcon = dir => {
    console.log(fs.copySync('./assets/icons', `${dir}/icons`));
}

Lib.createBG = dir => {
    console.log(fs.copySync('./assets/background_script.js', `${dir}/background_script.js`));
}

Lib.createCS = dir => {
    console.log(fs.copySync('./assets/content_script.js', `${dir}/content_script.js`));
}

Lib.createBA = dir => {
    console.log(fs.copySync('./assets/popup', `${dir}/browserAction`));
}

Lib.createPA = dir => {
    console.log(fs.copySync('./assets/popup', `${dir}/pageAction`));
}

Lib.createOP = dir => {
    console.log(fs.copySync('./assets/popup', `${dir}/options`));
}

module.exports = Lib;
