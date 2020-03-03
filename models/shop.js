const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
  event: String,
  title: String,
  host: String,
  hostBio: String,
  shortInfo: String,
  longInfo: String,
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

const Shop = mongoose.model('Shop', shopSchema)

module.exports = Shop;
