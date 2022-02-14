const mongoose = require('mongoose')

const leaderboardSchema = mongoose.Schema({
  id_rank: { type: String, required: true },
  rank_user: { type: String, required: true },
  username: { type: String, required: true },
  score: { type: Int32Array, required: true },
})

module.exports = mongoose.model('Leaderboard', leaderboardSchema)
