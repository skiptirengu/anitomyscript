# anitomyscript
[![Build Status](https://travis-ci.org/skiptirengu/anitomyscript.svg?branch=master)](https://travis-ci.org/skiptirengu/anitomyscript)

Pure javascript bindings for Anitomy, ported with emscripten. Runs on Node or the browser!

## Installation
Anitomyscript is pure javascript and doesn't have any dependencies. Simply run
```bash
npm install anitomyscript
```
and you're good to go!

## API
Node
```js
var anitomy = require('anitomyscript');
anitomy.parse(file);
```

Browser
```html
<script src="dist/bundle.min.js"></script>
<script>
  window.anitomyscript.parse(file);
</script>
```
