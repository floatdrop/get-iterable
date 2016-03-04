# get-iterable [![Build Status](https://travis-ci.org/floatdrop/get-iterable.svg?branch=master)](https://travis-ci.org/floatdrop/get-iterable)

> Get an iterable as an array

See [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for more.


## Install

```
$ npm install --save get-iterable
```


## Usage

```js
const getStream = require('get-iterable');

function * generator() {
	yield 1;
	yield 2;
	yield 3;
}

const arr = getIterable(generator());
console.log(arr);
	/*
	[1,2,3]
	*/
});
```


## API

### getIterable(iterable)

Get an iterable as an array.

## Related

- [get-stream](https://github.com/sindresorhus/get-stream) - Get stream as a string or buffer
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Get stdin as a string or buffer


## License

MIT © [Vsevolod Strukchisnky](http://github.com/floatdrop/get-iterable)
