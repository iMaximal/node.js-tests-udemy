const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0',
  })
})


// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.send([{
    name: 'Max',
    age: 30,
  }, {
    name: 'Andrew',
    age: 25,
  }, {
    name: 'Jen',
    age: 26,
  }])
})


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})

module.exports.app = app
