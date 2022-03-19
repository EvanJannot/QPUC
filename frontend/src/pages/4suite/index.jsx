import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ScoreContext,
  ConnexionContext,
  TimeContext,
  ThemeContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
import Answer from '../../components/Answer'

import {
  Wrapper,
  InfoWrapper,
  Time,
  TimeCounter,
  Timer,
  TimerCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  Answers,
  PointsBar,
  Point,
  Pass,
} from './style'

function Suite4() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const { changeClicked } = useContext(AnswerSelectedContext)
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  const { connected } = useContext(ConnexionContext)
  const { choosenTheme } = useContext(ThemeContext)
  const { score, resetScore } = useContext(ScoreContext)
  const { errors, addError } = useContext(ErrorContext)
  const { time, addSecond } = useContext(TimeContext)
  const [timer, setTimer] = useState(120)
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
        } else if (
          questionList.includes(requestData[questionNumber]._id) ||
          requestData[questionNumber].theme !== choosenTheme[0]
        ) {
          while (
            questionList.includes(requestData[questionNumber]._id) ||
            requestData[questionNumber].theme !== choosenTheme[0]
          ) {
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
      setTimer((time) => time - 1)
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  useEffect(() => {
    if (score === 4) {
      changeClicked('')
      history.push('/score')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])
  return (
    <Wrapper>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Timer>
          Temps restant :<TimerCounter>{timer}</TimerCounter>
        </Timer>
        <Errors>
          Erreurs :<ErrorsCounter>{errors}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      <AnswersWrapper>
        <Question>{question.question_statement}</Question>
        <PointsBar>
          <Point value={1} score={score}>
            1
          </Point>
          <Point value={2} score={score}>
            2
          </Point>
          <Point value={3} score={score}>
            3
          </Point>
          <Point value={4} score={score}>
            4
          </Point>
        </PointsBar>
        <Answers>
          <Answer answer={answers[0]} question={question} game={'4'}></Answer>
          <Answer answer={answers[1]} question={question} game={'4'}></Answer>
          <Answer answer={answers[2]} question={question} game={'4'}></Answer>
          <Answer answer={answers[3]} question={question} game={'4'}></Answer>
        </Answers>
        <Pass
          onClick={() => {
            addError()
            resetScore()
          }}
        >
          Passer
        </Pass>
      </AnswersWrapper>
    </Wrapper>
  )
}

export default Suite4
