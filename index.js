'use strict'

/**
 * Insert an item in an array
 * without mutating the original array.
 * @param {array} array - The source array.
 * @param {number} index - The index at which you'd like to insert.
 * @param {...*} items - Additional arguments: the items to be inserted at the index.
 */

const insert = (array, index, ...items) => [
  ...array.slice(0, index), // items before index
  ...items,                 // new items
  ...array.slice(index)     // rest of items
]

module.exports = insert;
