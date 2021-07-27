const express = require('express')
const exphbs = require('express-handlebars')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

// listening server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})