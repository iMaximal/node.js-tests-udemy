const expect = require('expect')
const utils = require('./utils')

describe('Utils', () => {
  describe('#add', () => {
    it('it should add two numbers', () => {
      const res = utils.add(33, 11)

      expect(res).toBe(44).toBeA('number')
    })


    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number')
        done()
      })
    })
  })


  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3)

      expect(res).toBe(9).toBeA('number')
    })


    it('should async square a number', (done) => {
      utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number')
        done()
      })
    })
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
