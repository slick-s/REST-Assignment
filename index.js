// Modules/Globals
const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Express Settings
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listening for Connections
app.listen(PORT)