const add = (a, b) => a + b

const asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 1000)
}

const square = (x) => x * x

const asyncSquare = (x, callback) => {
  setTimeout(() => {
    callback(x * x)
  }, 1000)
}

const setName = (user, fullName) => {
  const names = fullName.split(' ')

  const [firstName, lastName] = names

  const newUser = {
    ...user,
    firstName,
    lastName,
  }
  return newUser
}

module.exports = {
  add,
  asyncAdd,
  square,
  asyncSquare,
  setName,
}
