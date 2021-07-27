const mongoose = require('mongoose')
const db = mongoose.connection

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/URL-shortener'

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

db.on('error', () => {
  console.log('mongoDB error!')
})

db.once('open', () => {
  console.log('mongoDB connected!')
})

module.exports = db