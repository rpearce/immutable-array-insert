# immutable-array-insert
Easily insert items in an array without mutating the original array.

## Installation
```js
$ npm install --save immutable-array-insert
```

## Usage
```js
const insert = require('immutable-array-insert')

const arr = [1, 2, 3, 4, 5, 6]
const newArr = insert(arr, 2, 'ABC', { name: 'Hello' })

console.log(newArr)
// => [1, 2, 'ABC', Object, 3, 4, 5, 6]
```
The first 2 arguments are

1. the original array
1. the index at which to insert the items

and the rest of the parameters are variadic, allowing you to pass as my items as arguments as you'd like.

## Official Spec

* * *

### insert(array, index, items)

Insert an item in an array
without mutating the original array.

**Parameters**

**array**: `array`, The source array.

**index**: `number`, The index at which you'd like to insert.

**items**: `*`, Additional arguments: the items to be inserted at the index.

* * *

## Notes
This library uses a few ES6/ES2015 features to make this as simple as possible:
  * [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  * [spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
  * [rest parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)

If you would like to see an ES5 version of this, please create an issue.

## Contribute

1. Check out the [issues](https://github.com/rpearce/immutable-array-insert/issues)
1. Fork this repository
1. Clone your fork
1. Check out a feature branch (`$ git checkout -b my-feature`)
1. Make your changes and push your branch to your GitHub repo
1. Create a pull request from your branch to this repo's master branch
1. When all is merged, pull down the upstream changes to your master
1. Delete your feature branch
