# create-web-ext

`create-web-ext` is a scaffolding tool for browser extensions. It takes input few parameters and outputs a complete scaffolded broswer extenions project.

## Installation from source

You'll need:
* [Node.js](https://nodejs.org/en/), 6.0.0 or higher
* [npm](https://www.npmjs.com/), 3.0.0 or higher is recommended

Optionally, you may like:
* [nvm](https://github.com/creationix/nvm), which helps manage node versions

If you had already installed `create-web-ext` from npm,
you may need to uninstall it first:

    npm uninstall --global create-web-ext

Change into the source and install all dependencies:

    git clone https://github.com/web-ext-labs/create-web-ext.git
    cd create-web-ext
    npm install

Link it to your node installation:

    npm link

You are all set, check

    create-web-ext -v

You can now run it from any directory.
