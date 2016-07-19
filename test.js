const insert = require('./lib/index')
const { expect } = require('chai')

describe('Insert', () => {
  it('throws if an array is not the first argument', () => {
    const error = 'immutable-array-insert: first argument must be an Array'
    expect(() => insert(null, 1, 'test')).to.throw(error)
  })

  it('throws if a number is not the second argument', () => {
    const error = 'immutable-array-insert: second argument must be a Number'
    expect(() => insert([1, 2], 'a', 'test')).to.throw(error)
  })

  it('inserts at index 2', () => {
    const result = insert([1, 2, 3, 4], 2, 'test')
    expect(result).to.eql([1, 2, 'test', 3, 4])
  })

  it('inserts at the front', () => {
    const result = insert([1, 2, 3, 4], 0, 'test')
    expect(result).to.eql(['test', 1, 2, 3, 4])
  })

  it('inserts at the end', () => {
    const array = [1, 2, 3, 4]
    const result = insert(array, array.length, 'test')
    expect(result).to.eql([1, 2, 3, 4, 'test'])
  })
})
