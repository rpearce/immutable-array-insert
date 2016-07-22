'use strict';

/**
 * Insert an item in an array
 * without mutating the original array.
 * @param {array} array - The source array.
 * @param {number} index - The index at which you'd like to insert.
 * @param {...*} items - Additional arguments: the items to be inserted at the index.
 */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var insert = function insert(array, index) {
  for (var _len = arguments.length, items = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    items[_key - 2] = arguments[_key];
  }

  if (!Array.isArray(array)) throw new TypeError(errors.array);else if (!isInteger(index)) throw new TypeError(errors.index);

  return [].concat(_toConsumableArray(array.slice(0, index)), items, _toConsumableArray(array.slice(index)));
};

var errors = {
  array: 'immutable-array-insert: first argument must be an Array',
  index: 'immutable-array-insert: second argument must be a Number'
};

var isInteger = function isInteger(n) {
  return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
};

module.exports = insert;
