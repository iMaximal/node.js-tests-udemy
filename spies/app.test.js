const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app')

describe('App', () => {
  const db = {
    saveUser: expect.createSpy(),
  }
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    const spy = expect.createSpy()
    spy('Max', 30)
    expect(spy).toHaveBeenCalledWith('Max', 30)
  })

  it('should call saveUser with user object', () => {
    const email = 'max@example.com'
    const password = 'password'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({ email, password })
  })
})
