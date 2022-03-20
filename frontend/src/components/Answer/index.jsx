import React, { useContext } from 'react'
import {
  AnswerSelectedContext,
  ErrorContext,
  FaceScoreContext,
  ScoreContext,
} from '../../utils/context'
import { AnswerBlock } from './style'

function Answer({ answer, question, game, points }) {
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)
  const { addError } = useContext(ErrorContext)
  const { addPoints, resetScore } = useContext(ScoreContext)
  const { addFacePoints } = useContext(FaceScoreContext)

  function Validate() {
    if (game === '9') {
      if (answer === question.question_answer) {
        alert(`Bonne réponse, vous avez gagné ${question.points} point(s) !`)
        listAnswer.splice(0, 1, '')
        addPoints(question.points)
      } else {
        alert(`Mauvaise réponse, + 1 erreur !`)
        listAnswer.splice(0, 1, '')
        addError()
      }
    } else if (game === '4') {
      if (answer === question.question_answer) {
        listAnswer.splice(0, 1, '')
        addPoints(1)
      } else {
        listAnswer.splice(0, 1, '')
        addError()
        resetScore()
      }
    } else if (game === 'face') {
      if (answer === question.question_answer) {
        listAnswer.splice(0, 1, '')
        addFacePoints(points)
      } else {
        listAnswer.splice(0, 1, '')
        addError()
      }
    }
  }

  return (
    <AnswerBlock
      clicked={listAnswer.includes(answer) ? true : false}
      goodAnswer={listAnswer[0] === question.question_answer ? true : false}
      onClick={() => {
        changeClicked(answer)
        setTimeout(function () {
          Validate()
        }, 1000)
      }}
    >
      {answer}{' '}
    </AnswerBlock>
  )
}

export default Answer
