is-xcf [![Build Status](https://travis-ci.org/pskupinski/is-xcf.svg?branch=master)](https://travis-ci.org/pskupinski/is-xcf)
======

Check if a Buffer/Uint8Array is an [XCF](http://en.wikipedia.org/wiki/XCF_(file_format)) image

Inspired by [sindresorhus](https://github.com/sindresorhus) and his wonderful repos like [is-gif](https://github.com/sindresorhus/is-gif).

## Install

```sh
npm install is-xcf
```

## Usage

```js
var fs = require('fs');
var isXCF = require('is-xcf');
var buffer = fs.readFileSync('awesome.xcf');

isXCF(buffer); // returns true
```

## API

### isXCF(buffer)

Accepts a Buffer or Unit8Array.

Only needs the first 8 bytes, more is fine though.

## License

This module is [ISC licensed](https://github.com/pskupinski/is-xcf/blob/master/LICENSE).
