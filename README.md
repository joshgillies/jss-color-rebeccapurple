# jss-color-rebeccapurple

JSS plugin that transforms the W3C CSS rebeccapurple color to rgb.

[![Build Status](https://travis-ci.org/joshgillies/jss-color-rebeccapurple.svg)](https://travis-ci.org/joshgillies/jss-color-rebeccapurple)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage

```js
var jss = require
var rebeccapurple = require('jss-color-rebeccapurple')

jss.use(rebeccapurple())

var sheet = jss.createStyleSheet({
  'test': {
    color: 'rebeccapurple'
  }
})

console.log(sheet.toString())
```

```js
.test--jss-0-0 {
  color: rgb(102, 51, 153);
}
```

## License

MIT
