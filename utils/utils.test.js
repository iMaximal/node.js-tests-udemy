const assert = require('assert')
const utils = require('./utils')

it('it should add two numbers', () => {
  assert.equal(utils.add(33, 11), 44)

  // const res = utils.add(33, 112)
  //
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`)
  // }
})

it('should square a number', () => {
  assert.equal(utils.square(3), 9)
  // const res = utils.square(3)
  //
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}.`)
  // }
})
