'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _math = require('@pixi/math/dist/math.js');

Object.keys(_math).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _math[key];
        }
    });
});
