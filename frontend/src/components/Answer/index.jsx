import React, { useContext } from 'react'
import {
  AnswerSelectedContext,
  ErrorContext,
  FaceScoreContext,
  ScoreContext,
} from '../../utils/context'
import { AnswerBlock } from './style'
import correct from '../../assets/goodAnswer.mp3'
import incorrect from '../../assets/wrongAnswer.mp3'

function Answer({ answer, question, game, points }) {
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)
  const { addError } = useContext(ErrorContext)
  const { addPoints, resetScore } = useContext(ScoreContext)
  const { addFacePoints } = useContext(FaceScoreContext)

  function Sound() {
    if (answer === question.question_answer) {
      new Audio(correct).play()
    } else {
      new Audio(incorrect).play()
    }
  }

  function Validate() {
    if (game === '9') {
      if (answer === question.question_answer) {
        listAnswer.splice(0, 1, '')
        addPoints(question.points)
      } else {
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
        Sound()
        setTimeout(function () {
          Validate()
        }, 2000)
      }}
    >
      {answer}{' '}
    </AnswerBlock>
  )
}

export default Answer
