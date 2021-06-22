const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to database')
}).catch(err => {
  console.log('Database error', err)
  process.exit()
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' })
})

require('./app/routes/note.route.js')(app)

app.listen('8000', () => {
  console.log('Server listening at 8000')
})
