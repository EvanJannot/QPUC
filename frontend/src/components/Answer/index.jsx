import React, { useContext } from 'react'
import { AnswerSelectedContext } from '../../utils/context'
import { AnswerBlock } from './style'

function Answer({ answer }) {
  const { changeClicked, listAnswer } = useContext(AnswerSelectedContext)

  return (
    <AnswerBlock
      clicked={listAnswer.includes(answer) ? true : false}
      onClick={() => {
        changeClicked(answer)
        console.log(listAnswer[0])
      }}
    >
      {answer}{' '}
    </AnswerBlock>
  )
}

export default Answer
