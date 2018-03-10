[![Build Status](https://travis-ci.org/web-ext-labs/create-web-ext.svg?branch=master)](https://travis-ci.org/web-ext-labs/create-web-ext)

# `create-web-ext`

[`create-web-ext`](https://www.npmjs.com/package/create-web-ext/) is a scaffolding tool for browser extensions. It takes input few parameters and outputs a complete boilerplate browser extension project. This folder will contain all the required folders and files to get started with the extension.

## Install

    $ npm install -g create-web-ext

You are all set, check

    $ create-web-ext -v
    create-web-ext version 0.0.3

## Usage

    $ create-web-ext
    $ Addon name  (My extension) myAddon
    $ Description My addon will rock \o/
    $ Version  (0.0.1) 1.1.1
    $ Include background script? (y/n) y
    $ AddonInclude content script? (y/N) y
    $ Include browser action? (y/N) y
    $ Include page action? (y/N) y
    $ Include addon options? (y/N) y
    ✨  Done.
    
This will generate a directory `myAddon` with following structure

```text
myAddon
   ├── background_script.js
   ├── browserAction
   │   ├── index.html
   │   ├── script.js
   │   └── style.css
   ├── content_script.js
   ├── icons
   │   └── icon.png
   ├── manifest.json
   ├── options
   │   ├── index.html
   │   ├── script.js
   │   └── style.css
   └── pageAction
       ├── index.html
       ├── script.js
       └── style.css
```
## Requirements

* You need [Node.js](https://nodejs.org/en/) , 6.0.0 or higher
* Install [npm](https://www.npmjs.com/) , 3.0.0 or higher is recommended

Optionally, you may like:
* [nvm](https://github.com/creationix/nvm), which helps manage node versions

You can now run it from any directory.
