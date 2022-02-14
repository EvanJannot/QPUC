const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id_user: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
})

module.exports = mongoose.model('User', userSchema)
