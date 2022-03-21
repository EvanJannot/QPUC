import { useContext, useEffect, useState } from 'react'
import {
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
  IdContext,
  QuestionListContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'

import {
  ScoreWrapper,
  InfoWrapper,
  TotalTime,
  TotalErrors,
  Separation,
  FinalScore,
  ScoreNumber,
  LeaderboardButton,
  Title,
} from './style'

function Score() {
  const { errors } = useContext(ErrorContext)
  const { time } = useContext(TimeContext)
  const { score } = useContext(ScoreContext)
  const { id } = useContext(IdContext)
  const { resetError } = useContext(ErrorContext)
  const { resetScore } = useContext(ScoreContext)
  const { resetTime } = useContext(TimeContext)
  const { resetList } = useContext(QuestionListContext)
  const [finalScore, setFinalScore] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    let calculus = score * (600 - time) - errors * 100
    setFinalScore(calculus)
    fetch(`https://qpuc-backend.herokuapp.com/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        for (let i = 0; i < requestData.length; i++) {
          if (requestData[i]._id === id[0]) {
            if (requestData[i].highscore <= calculus) {
              fetch(`https://qpuc-backend.herokuapp.com/api/auth/${id[0]}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  highscore: calculus,
                }),
              })
            }
          }
        }
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <ScoreWrapper>
      <Title>PARTIE TERMINEE</Title>
      <InfoWrapper>
        <TotalTime>Temps Total : {time}</TotalTime>
        <TotalErrors>Nombre d'Erreurs : {errors}</TotalErrors>
        <Separation />
        <FinalScore>
          Score Final :<ScoreNumber>{finalScore}</ScoreNumber>
        </FinalScore>
      </InfoWrapper>
      <LeaderboardButton
        to="/leaderboard"
        onClick={() => {
          resetError()
          resetScore()
          resetTime()
          resetList()
        }}
        $isFullLink
      >
        LEADERBOARD
      </LeaderboardButton>
    </ScoreWrapper>
  )
}

export default Score
