import { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext } from '../../utils/context'
import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
`

export const InfoWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';

  color: white;
  font-size: 40px;
`

export const TimeCounter = styled.div`
  display: flex;
  width: 187px;
  height: 106px;

  align-items: center;
  justify-content: center;

  background: #caddee;
  border: 2px solid #000000;
  box-sizing: border-box;
  font-size: 60px;
  color: black;
  border-radius: 25px;
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
`

export const ScoreCounter = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 154px;
  height: 154px;

  box-sizing: border-box;
  border-radius: 100px;
  background: #ffffff;

  font-family: 'Changa One', 'sans-serif';
  font-size: 60px;
  color: black;
  border: 3px solid #000000;
  box-sizing: border-box;
`

export const Errors = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
`
const ErrorsCounter = styled.div`
  display: flex;

  align-self: center;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 106px;

  color: black;
  font-size: 60px;
  background: #caddee;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`

export const AnswersWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 50%;
  height: 50%;

  background: linear-gradient(180deg, #f2a616 0%, #fee301 65.1%);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const ValidateButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  background: #f2a616;
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`

function Gagnants9() {
  const [score, setScore] = useState(0)
  const [error, setError] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  function AlertC() {
    alert('coucou')
  }
  //   let history = useHistory()
  //   const { connected } = useContext(ConnexionContext)
  //   useEffect(() => {
  //     if (connected === false) {
  //       history.push('/')
  //     }
  //   }, [history, connected])
  return (
    <MainWrapper>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Score>
          Score :<ScoreCounter>{score}</ScoreCounter>
        </Score>
        <Errors>
          Erreurs :<ErrorsCounter>{error}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      <AnswersWrapper></AnswersWrapper>
      <ValidateButton onClick={AlertC}>Valider</ValidateButton>
    </MainWrapper>
  )
}

export default Gagnants9
