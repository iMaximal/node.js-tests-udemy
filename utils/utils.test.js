const expect = require('expect')
const utils = require('./utils')

it('it should add two numbers', () => {
  const res = utils.add(33, 11)

  expect(res).toBe(44).toBeA('number')
})

it('should square a number', () => {
  const res = utils.square(3)

  expect(res).toBe(9).toBeA('number')
})

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
  const user = {
    location: 'Yekaterinburg',
    age: 30,
  }
  const res = utils.setName(user, 'Maksim Golitsyn')

  expect(res).toInclude({
    firstName: 'Maksim',
    lastName: 'Golitsyn',
  })
})

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'Max'}).toNotEqual({name: 'Max'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Max',
//     age: 25,
//     location: 'Yekaterinburg'
//   }).toExclude({
//     age: 23
//   })
// });
