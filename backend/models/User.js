const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id_user: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  highscore: { type: Number, required: true, default: 0 },
})

module.exports = mongoose.model('User', userSchema)
