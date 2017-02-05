# nat-app

From manage window you can control notifications on the second window (separate screen).

* start, stop, restart timer 

![Time Elapsed](https://github.com/cs3b/electron-multiwindow-notification-app/raw/master/doc/time-elapsed.jpg)

* send simple messsage 

![Simple Message](https://github.com/cs3b/electron-multiwindow-notification-app/raw/master/doc/messages.jpg)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js >=6.x](https://nodejs.org/) (with NPM)
* [Ember CLI >=2.11](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/cs3b/electron-multiwindow-notification-app.git` this repository
* `cd nat-app`
* `npm install`

## Running / Development

`ember electron`

### Building

For detailed instructions look at: https://github.com/electron-userland/electron-packager

````bash
ember electron:package
# if you have error about missing npm packages
zsh -c "cd tmp/electron-build-tmp && npm i"
# and run package once again
ember electron:package
# after successfull build remove unneeded node_modules (it will reduce package size by ~300M) 
rm -rf electron-builds/nat-app-win32-x64/resources/app/node_modules
````

By default it will build win x64 build - see package.json if you want to change the platform.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [ember-electron](https://github.com/felixrieseberg/ember-electron)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
