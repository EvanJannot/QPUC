const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connect = require('./connection')
const Leaderboard = require('./models/Leaderboard')
const Question = require('./models/Question')

const userRoutes = require('./routes/user')

mongoose
  .connect(connect().toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())

app.use('/api/auth', userRoutes)

module.exports = app
