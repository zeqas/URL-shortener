const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

const url = require('./models/seed/urlSeeder')
const urlShortener = require('./models/url')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router