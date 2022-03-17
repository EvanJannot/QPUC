import React, { useContext } from 'react'
import {
  AnswerSelectedContext,
  ErrorContext,
  ScoreContext,
} from '../../utils/context'
import { AnswerBlock } from './style'

function Answer({ answer, question }) {
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)
  const { addError } = useContext(ErrorContext)
  const { addPoints } = useContext(ScoreContext)

  function Validate() {
    if (answer === question.question_answer) {
      alert(`Bonne réponse, vous avez gagné ${question.points} point(s) !`)
      listAnswer.splice(0, 1, '')
      addPoints(question.points)
    } else {
      alert(`Mauvaise réponse, + 1 erreur !`)
      listAnswer.splice(0, 1, '')
      addError()
    }
  }

  return (
    <AnswerBlock
      clicked={listAnswer.includes(answer) ? true : false}
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
