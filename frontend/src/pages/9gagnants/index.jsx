import { useEffect, useState, useContext } from 'react'
import { AnswerSelectedContext } from '../../utils/context'
import Answer from '../../components/Answer'
import {
  MainWrapper,
  InfoWrapper,
  Time,
  TimeCounter,
  Score,
  ScoreCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  QuestionPoints,
  Answers,
  ValidateButton,
} from './style'

function Gagnants9() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const { listAnswer } = useContext(AnswerSelectedContext)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  function Validate() {
    if (question.question_answer === listAnswer[0]) {
      alert(`Bonne réponse, vous avez gagné ${question.points} point(s) !`)
      setScore(score + question.points)
    } else {
      alert(`Mauvaise réponse, + 1 erreur !`)
      setError(error + 1)
    }
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
          <Answer answer={answers[0]}></Answer>
          <Answer answer={answers[1]}></Answer>
          <Answer answer={answers[2]}></Answer>
          <Answer answer={answers[3]}></Answer>
        </Answers>
      </AnswersWrapper>
      <ValidateButton onClick={Validate}>Valider</ValidateButton>
    </MainWrapper>
  )
}

export default Gagnants9
