const mongoose = require('mongoose')

const shopsSchema = new mongoose.Schema({
  event: String,
  shop: String,
  host: String,
  info: String,
  day: String,
  date: String,
  // (can I do the regexp with this?)
  startTime: String,
  endTime: String,
  location: String,
  price: String,
  img: String
},
{
  timestamps: true
})

const Shops = mongoose.model('Shops', shopsSchema)

module.exports = Shops;
