is-xcf
======

Check if a Buffer/Uint8Array is an (XCF)[http://en.wikipedia.org/wiki/XCF_(file_format)] image

Inspired by [sindresorhus](https://github.com/sindresorhus) and his wonderful repos like [is-gif](https://github.com/sindresorhus/is-gif).

## Install

```sh
npm install is-xcf
```

## Usage

```js
var readChunk = rquire('read-chunk'); // npm install read-chunk
var isXCF = require('is-xcf');
var buffer = readChunk.sync('awesome.xcf', 0, 8);

isXCF(buffer); // returns true
```

## API

### isXCF(buffer)

Accepts a Buffer or Unit8Array.

Only needs the first 8 bytes, more is fine though.

## License

This module is [ISC licensed](https://github.com/pskupinski/is-xcf/blob/master/LICENSE).
