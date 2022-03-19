import { useContext, useEffect, useState } from 'react'
import {
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
  IdContext,
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
} from './style'

function Score() {
  const { errors } = useContext(ErrorContext)
  const { time } = useContext(TimeContext)
  const { score } = useContext(ScoreContext)
  const { id } = useContext(IdContext)
  const [finalScore, setFinalScore] = useState()

  useEffect(() => {
    let calculus = score * (450 - time) - errors * time
    console.log(calculus)
    setFinalScore(calculus)

    fetch(`http://localhost:4200/api/auth/${id[0]}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        highscore: calculus,
      }),
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
      <InfoWrapper>
        <TotalTime>Temps Total : {time}</TotalTime>
        <TotalErrors>Nombre d'Erreurs : {errors}</TotalErrors>
        <Separation />
        <FinalScore>
          Score Final :<ScoreNumber>{finalScore}</ScoreNumber>
        </FinalScore>
      </InfoWrapper>
      <LeaderboardButton to="/leaderboard" $isFullLink>
        LEADERBOARD
      </LeaderboardButton>
    </ScoreWrapper>
  )
}

export default Score
