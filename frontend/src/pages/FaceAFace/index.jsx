import { useEffect, useState, useContext } from 'react'
import {
  AnswerSelectedContext,
  QuestionListContext,
  ErrorContext,
  ConnexionContext,
  TimeContext,
  FaceScoreContext,
  SoundContext,
} from '../../utils/context'
import { useHistory } from 'react-router-dom'
import Answer from '../../components/Answer'
import { Loader } from '../../utils/style/Atoms'
import timeSound from '../../assets/time.mp3'
import endTimeSound from '../../assets/endTimer.mp3'
import {
  Wrapper,
  InfoWrapper,
  Time,
  TimeCounter,
  Score,
  ScoreCounter,
  Errors,
  ErrorsCounter,
  AnswersWrapper,
  Question,
  Answers,
  PointsBar,
  Point,
  Title,
} from './styles'

function FaceAFace() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState({})
  const { changeClicked } = useContext(AnswerSelectedContext)
  const { questionList, oldQuestion } = useContext(QuestionListContext)
  const { connected } = useContext(ConnexionContext)
  const { errors, addError } = useContext(ErrorContext)
  const { time, addSecond } = useContext(TimeContext)
  const { faceScore, resetFacePoints } = useContext(FaceScoreContext)
  const { soundState } = useContext(SoundContext)
  const [points, setPoints] = useState(4)
  const [timer, setTimer] = useState(20)
  // eslint-disable-next-line no-unused-vars
  const [isDataLoading, setDataLoading] = useState(false)
  let history = useHistory()
  let percent = 100

  const percentage = (timerValue) => {
    percent = (timerValue / 20) * 100
    if (percent > 75 && percent <= 100) {
      setPoints(4)
    } else if (percent > 50 && percent <= 75) {
      setPoints(3)
    } else if (percent > 25 && percent <= 50) {
      setPoints(2)
    } else if (percent <= 25) {
      setPoints(1)
    }
  }

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
    setTimer(20)
    setDataLoading(true)
    fetch(`https://qpuc-backend.herokuapp.com/api/question/`)
      .then((response) => response.json())
      .then((requestData) => {
        let questionNumber = Math.floor(Math.random() * requestData.length)

        if (questionList.includes(requestData[questionNumber]._id)) {
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
    setDataLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceScore, errors])

  useEffect(() => {
    if (faceScore >= 12) {
      changeClicked('')
      resetFacePoints()
      history.push('/score')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceScore])

  useEffect(() => {
    percentage(timer)
    if (timer === 0) {
      if (soundState === true) {
        new Audio(endTimeSound).play()
      }
      addError()
    }
    let interval = null
    if (soundState === true) {
      new Audio(timeSound).play()
    }
    interval = setInterval(() => {
      addSecond()
      setTimer((time) => time - 1)
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <Wrapper>
      <Title>FACE A FACE</Title>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>{time}</TimeCounter>
        </Time>
        <Score>
          Score :<ScoreCounter>{faceScore}</ScoreCounter>
        </Score>
        <Errors>
          Erreurs :<ErrorsCounter>{errors}</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      {isDataLoading ? (
        <Loader />
      ) : (
        <AnswersWrapper>
          <Question>{question.question_statement}</Question>
          <PointsBar percent={percent}>
            <Point value={1} score={points}>
              1
            </Point>
            <Point value={2} score={points}>
              2
            </Point>
            <Point value={3} score={points}>
              3
            </Point>
            <Point value={4} score={points}>
              4
            </Point>
          </PointsBar>
          <Answers>
            <Answer
              answer={answers[0]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[1]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[2]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
            <Answer
              answer={answers[3]}
              question={question}
              game={'face'}
              points={points}
            ></Answer>
          </Answers>
        </AnswersWrapper>
      )}
    </Wrapper>
  )
}

export default FaceAFace
