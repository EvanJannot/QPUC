const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
  id_question: { type: String, required: true },
  question_statement: { type: String, required: true },
  question_answer: { type: String, required: true },
  points: { type: Number, required: true },
  theme: { type: String, required: true },
  credits: { type: String, required: true },
})

module.exports = mongoose.model('Question', questionSchema)
