// -*- mode: web; -*-

/**
 * @providesModule jf-react-native
 */

'use strict';

const React = require('react-native');

const JFReactExtension = {
    get Toast() { return require('./libs/Toast/JFToast');},
  	get Button() { return require('./libs/Button/JFButton');},
};

// polyfill 里面的 Object.assign 不支持 getter/setter

let JFReactNative = {};

[React, JFReactExtension].map((module) => {
    for (let prop in module) {
        if (module.hasOwnProperty(prop)) {
            Object.defineProperty(JFReactNative, prop, Object.getOwnPropertyDescriptor(module, prop));
        }
    }
});

module.exports = JFReactNative;
