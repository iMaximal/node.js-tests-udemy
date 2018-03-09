const add = (a, b) => a + b

const square = (x) => x * x

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
  square,
  setName,
}
