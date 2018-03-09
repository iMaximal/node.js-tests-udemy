const db = require('./db')

module.exports.handleSignup = (email, password) => {
  // Check if email already exist
  db.saveUser({ email, password })
  // Send the welcome email
}
