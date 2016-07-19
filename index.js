'use strict'

/**
 * Insert an item in an array
 * without mutating the original array.
 * @param {array} array - The source array.
 * @param {number} index - The index at which you'd like to insert.
 * @param {...*} items - Additional arguments: the items to be inserted at the index.
 */
const insert = (array, index, ...items) => {
  if (!Array.isArray(array)) throw new Error(errors.array)
  else if (!isInteger(index)) throw new Error(errors.index)

  return [
    ...array.slice(0, index), // items before index
    ...items,                 // new items
    ...array.slice(index)     // rest of items
  ]
}

const errors = {
  array: 'immutable-array-insert: first argument must be an Array',
  index: 'immutable-array-insert: second argument must be a Number'
}

const isInteger = (n) =>
  typeof n === "number" &&
    isFinite(n) &&
    Math.floor(n) === n

module.exports = insert;
