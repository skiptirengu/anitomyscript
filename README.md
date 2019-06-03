# anitomyscript
[![Build Status](https://travis-ci.org/skiptirengu/anitomyscript.svg?branch=master)](https://travis-ci.org/skiptirengu/anitomyscript)

Pure javascript bindings for [Anitomy](https://github.com/erengy/anitomy), ported with emscripten. Runs on Node or the browser!

1.x versions uses asm.js. You should consider using versions >= 2 which are compiled to WASM!

## Demo
You can test it [here](https://skiptirengu.github.io/anitomyscript/).

## Installation
Anitomyscript is pure javascript and doesn't have any dependencies. Simply run
```bash
npm install anitomyscript
```
and you're good to go!

## Usage
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

## API

### parse(file, [options])
Parses a file or an array of files.

```js
console.log(
  anitomy.parse("[tlacatlc6] Natsume Yuujinchou Shi Vol. 1v2 & Vol. 2 (BD 1280x720 x264 AAC)")
);
/*
{
   "anime_title":"Natsume Yuujinchou Shi",
   "audio_term":"AAC",
   "file_name":"[tlacatlc6] Natsume Yuujinchou Shi Vol. 1v2 & Vol. 2 (BD 1280x720 x264 AAC)",
   "release_group":"tlacatlc6",
   "release_version":"2",
   "source":"BD",
   "video_term":"x264",
   "video_resolution":"1280x720",
   "volume_number":[
      "1",
      "2"
   ]
}
*/
```

### AnitomyNative
If you need more control over anitomy's behavior, anitomyscript exposes an
object with native anitomy symbols. For more exemples check out the [tests](https://github.com/skiptirengu/anitomyscript/blob/master/test/anitomyscript.spec.js).

```js
const native = new anitomyscript.AnitomyNative();
const elements = new native.Anitomy().parse(file, options);
console.log(elements.size());
```

#### AnitomyNative.Anitomy
Anitomy instance with some native methods like parse(), elements(), options() and tokens()

#### AnitomyNative.Elements
Parsed elements

#### AnitomyNative.Options
Anitomy's parse options

#### AnitomyNative.ElementCategory
Anitomy's parsed elements categories

#### AnitomyNative.VectorString_t
Vector of strings

#### AnitomyNative.VectorElements
Vector of elements
