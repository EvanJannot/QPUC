import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ScoreContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
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
  Theme,
} from './style'

function Gagnants9() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const { listAnswer, changeClicked } = useContext(AnswerSelectedContext)
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  const { score } = useContext(ScoreContext)
  const { errors } = useContext(ErrorContext)
  // const [score, setScore] = useState(0)
  // const [error, setError] = useState(0)
  const [time, setTime] = useState(0)
  let history = useHistory()

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...answers]
    newData.splice(0, 1, value1)
    newData.splice(1, 1, value2)
    newData.splice(2, 1, value3)
    newData.splice(3, 1, value4)
    const shuffledData = newData.sort((a, b) => 0.5 - Math.random())
    setAnswers(shuffledData)
  }

  useEffect(() => {
    fetch(`http://localhost:4200/api/question/`)
      .then((response) => response.json())
      .then((requestData) => {
        let questionNumber = Math.floor(Math.random() * requestData.length)

        if (questionList === []) {
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        } else if (questionList.includes(requestData[questionNumber]._id)) {
          while (questionList.includes(requestData[questionNumber]._id)) {
            questionNumber = Math.floor(Math.random() * requestData.length)
          }
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        } else {
          setQuestion(requestData[questionNumber])
          updateData(
            requestData[questionNumber].question_answer,
            requestData[questionNumber].fake1,
            requestData[questionNumber].fake2,
            requestData[questionNumber].fake3
          )
          oldQuestion(requestData[questionNumber]._id)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, errors])

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  useEffect(() => {
    if (score >= 9) {
      changeClicked('')
      history.push('/4suite')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  // function Validate() {
  //   if (question.question_answer === listAnswer[0]) {
  //     alert(`Bonne réponse, vous avez gagné ${question.points} point(s) !`)
  //     listAnswer.splice(0, 1, '')
  //     setScore(score + question.points)
  //   } else {
  //     alert(`Mauvaise réponse, + 1 erreur !`)
  //     listAnswer.splice(0, 1, '')
  //     setError(error + 1)
  //   }
  // }

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
          Erreurs :<ErrorsCounter>{errors}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      <AnswersWrapper>
        <Question>{question.question_statement}</Question>
        <Theme>{question.theme}</Theme>
        <QuestionPoints>{question.points} POINT(S)</QuestionPoints>
        <Answers>
          <Answer answer={answers[0]} points={question.points}></Answer>
          <Answer answer={answers[1]} points={question.points}></Answer>
          <Answer answer={answers[2]} points={question.points}></Answer>
          <Answer answer={answers[3]} points={question.points}></Answer>
        </Answers>
      </AnswersWrapper>
      {/* <ValidateButton onClick={Validate}>Valider</ValidateButton> */}
    </MainWrapper>
  )
}

export default Gagnants9
