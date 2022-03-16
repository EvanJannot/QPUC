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

export const Question = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 32px;
`

export const QuestionPoints = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 32px;
`

export const Answers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
`

export const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;

  background: white;
  font-size: 24px;
  width: 250px;
  height: 60px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
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
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const [score, setScore] = useState(0)
  const [error, setError] = useState(0)
  const [time, setTime] = useState(0)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...answers]
    newData.push(value1, value2, value3, value4)
    const shuffledData = newData.sort((a, b) => 0.5 - Math.random())
    setAnswers(shuffledData)
  }

  useEffect(() => {
    fetch(`http://localhost:4200/api/question/6231c58dbdf130c1a86a5f4e`)
      .then((response) => response.json())
      .then((requestData) => {
        setQuestion(requestData)
        updateData(
          requestData.question_answer,
          requestData.fake1,
          requestData.fake2,
          requestData.fake3
        )
        console.log(requestData)
      })
  }, [])

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
      <AnswersWrapper>
        <Question>{question.question_statement}</Question>
        <QuestionPoints>{question.points}</QuestionPoints>
        <Answers>
          <Answer
            onClick={() => {
              console.log(answers[0])
            }}
          >
            {answers[0]}
          </Answer>
          <Answer onClick={() => console.log(answers[1])}>{answers[1]}</Answer>
          <Answer onClick={() => console.log(answers[2])}>{answers[2]}</Answer>
          <Answer onClick={() => console.log(answers[3])}>{answers[3]}</Answer>
        </Answers>
      </AnswersWrapper>
      <ValidateButton onClick={AlertC}>Valider</ValidateButton>
    </MainWrapper>
  )
}

export default Gagnants9
