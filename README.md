# anitomyscript
[![Build Status](https://travis-ci.org/skiptirengu/anitomyscript.svg?branch=master)](https://travis-ci.org/skiptirengu/anitomyscript)

Pure javascript bindings for [Anitomy](https://github.com/erengy/anitomy), ported with emscripten. Runs on Node or the browser!

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
const anitomy = require('anitomyscript');
await anitomy(file);
```

Browser
```html
<script src="dist/anitomyscript.bundle.min.js"></script>
<script>
  window.anitomyscript(file).then((res) => console.log(res));
</script>
```

## API

### parse(file) -> Promise<Array|Object>
Parses a file or an array of files.

```js
console.log(
  await anitomy("[tlacatlc6] Natsume Yuujinchou Shi Vol. 1v2 & Vol. 2 (BD 1280x720 x264 AAC)")
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

## License
Licensed under [BSD-2-Clause](./LICENSE)
