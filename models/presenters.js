const mongoose = require('mongoose')
const Schema = mongoose.Schema

const presenterSchema = Schema({
  firstName: String,
  lastName: String,
  about: String,
  contact: String,
  img: String
})

const Presenter = mongoose.model('Presenter', presenterSchema)

module.exports = Presenter
