const db = require('../../config/mongoose')
const Url = require('../url')

const data = [
  {
    originURL: 'https://www.google.com',
    shortenURL: 'http://localhost:3000/qB3h4',
    urlCode: 'qB3h4'
  },
  {
    originURL: 'https://www.youtube.com/',
    shortenURL: 'http:///nameless-shelf-45002.herokuapp.com/9c7A4',
    urlCode: '9c7A4'
  }
]

db.once('open', () => {
  Url.create(data)
    .then(() => console.log('Url seeder added successfully!'))
    .catch(err => console.error(err))
})