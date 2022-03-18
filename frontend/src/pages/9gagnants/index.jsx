import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
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
  Theme,
} from './style'

function Gagnants9() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const { changeClicked } = useContext(AnswerSelectedContext)
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  const { connected } = useContext(ConnexionContext)
  const { score, resetScore } = useContext(ScoreContext)
  const { errors, resetErrors } = useContext(ErrorContext)
  const { time, addSecond } = useContext(TimeContext)
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
      addSecond()
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  useEffect(() => {
    if (score >= 9) {
      changeClicked('')
      history.push('/4suiteTheme')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  useEffect(() => {
    if (connected === false) {
      resetScore()
      resetErrors()
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, connected])
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
          <Answer answer={answers[0]} question={question} game={'9'}></Answer>
          <Answer answer={answers[1]} question={question} game={'9'}></Answer>
          <Answer answer={answers[2]} question={question} game={'9'}></Answer>
          <Answer answer={answers[3]} question={question} game={'9'}></Answer>
        </Answers>
      </AnswersWrapper>
    </MainWrapper>
  )
}

export default Gagnants9
