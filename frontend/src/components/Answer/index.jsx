import React, { useContext } from 'react'
import {
  AnswerSelectedContext,
  ErrorContext,
  ScoreContext,
} from '../../utils/context'
import { AnswerBlock } from './style'

function Answer({ answer, points }) {
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)
  const { errors, addError } = useContext(ErrorContext)
  const { score, addPoints } = useContext(ScoreContext)

  function Validate() {
    if (answer === listAnswer[0]) {
      alert(`Bonne réponse, vous avez gagné ${points} point(s) !`)
      listAnswer.splice(0, 1, '')
      addPoints(points)
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
        Validate()
        console.log(listAnswer[0])
      }}
    >
      {answer}{' '}
    </AnswerBlock>
  )
}

export default Answer
