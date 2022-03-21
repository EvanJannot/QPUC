const Question = require('../models/Question')

exports.addQuestion = (req, res, next) => {
  const question = new Question({
    ...req.body,
  })
  question
    .save()
    .then(() => res.status(201).json({ message: 'Question créée !' }))
    .catch((error) => res.status(400).json({ error }))
}

exports.getAllQuestions = (req, res, next) => {
  Question.find()
    .then((users) => {
      res.status(200).json(users)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

exports.getOneQuestion = (req, res, next) => {
  Question.findOne({
    _id: req.params.id,
  })
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      })
    })
}
