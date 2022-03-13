const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const questionSchema = mongoose.Schema(
  {
    question_statement: { type: String, required: true },
    question_answer: { type: String, required: true },
    points: { type: Number, required: true },
    theme: { type: String, required: true },
    credits: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

questionSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Question', questionSchema)
