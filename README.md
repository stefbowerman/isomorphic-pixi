# Isomorphic Pixi

A simple wrapper for pixi.js for sites that use isomorphic rendering. As 
the DOM/canvas/WebGL does not exist on the server, many of Pixi's features
will fail/error if used on the server.

This library will require a server-safe subset of Pixi.js on the server (currently 
only the math utilities such as Point and shapes like Rectangle, Circle, etc), 
and the full version of Pixi.js on the browser.

IMPORTANT: Your project must have pixi.js as a dependency. This module avoids listing pixi.js 
as a dependency so that you can choose what version to use.

**Usage in server-side code**

ES2015
```es6
import { Rectangle } from 'isomorphic-pixi';
const myRect = new Rectangle(0, 0, 0, 0);
```

JavaScript (ES5)
```js
var PIXI = require ('isomorphic-pixi');
var myRect = new PIXI.Rectangle(0, 0, 0, 0);
```
