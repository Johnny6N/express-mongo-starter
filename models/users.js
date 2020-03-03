const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: String,
  pronoun: String,
  phone: String,
  email: String,
  about: String,
  role: {
    type: String,
    enum: ['volunteer', 'presenter', 'admin'],
    default: 'volunteer'}
})

const User = mongoose.model('User', userSchema)

module.exports = User
