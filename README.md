is-xcf [![Build Status](https://travis-ci.org/pskupinski/is-xcf.svg?branch=master)](https://travis-ci.org/pskupinski/is-xcf)
======

Check if a Buffer/Uint8Array is an [XCF] image

Inspired by [sindresorhus](https://github.com/sindresorhus) and his wonderful repos like [is-gif](https://github.com/sindresorhus/is-gif).

## Install

```sh
npm install is-xcf
```

## Usage


##### Node.js

```js
var fs = require('fs');
var isXCF = require('is-xcf');
var buffer = fs.readFileSync('awesome.xcf');

isXCF(buffer); // returns true
```

##### Browser

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'awesome.xcf');
xhr.responseType = 'arraybuffer';

xhr.onload = function () {
  isXCF(new Uint8Array(this.response)); // returns true
};

xhr.send();
```

## API

### isXCF(buffer)

Accepts a Buffer or Unit8Array.

Only needs the first 8 bytes, more is fine though.

## License

This module is [ISC licensed](https://github.com/pskupinski/is-xcf/blob/master/LICENSE).


[XCF]: http://en.wikipedia.org/wiki/XCF_(file_format)
