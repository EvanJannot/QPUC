import React, { useState, createContext } from 'react'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
  const [soundState, setSound] = useState(true)
  const changeSound = () => {
    setSound(soundState === false ? true : false)
    console.log(soundState)
  }

  return (
    <SoundContext.Provider value={{ soundState, changeSound }}>
      {children}
    </SoundContext.Provider>
  )
}

export const FaceScoreContext = createContext()

export const FaceScoreProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [faceScore, setFaceScore] = useState(0)
  const addFacePoints = (points) => {
    setFaceScore(faceScore + points)
  }
  const resetFacePoints = () => {
    setFaceScore(0)
  }

  return (
    <FaceScoreContext.Provider
      value={{ faceScore, addFacePoints, resetFacePoints }}
    >
      {children}
    </FaceScoreContext.Provider>
  )
}

export const TimeContext = createContext()

export const TimeProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(0)

  const addSecond = () => {
    setTime(time + 1)
  }

  const resetTime = () => {
    setTime(0)
  }

  return (
    <TimeContext.Provider value={{ time, addSecond, resetTime }}>
      {children}
    </TimeContext.Provider>
  )
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [choosenTheme] = useState([])
  const SelectTheme = (theme) => {
    choosenTheme.splice(0, 1, theme)
  }

  return (
    <ThemeContext.Provider value={{ choosenTheme, SelectTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0)
  const addPoints = (points) => {
    setScore(score + points)
  }
  const resetScore = () => {
    setScore(0)
  }

  return (
    <ScoreContext.Provider value={{ score, addPoints, resetScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [errors, setError] = useState(0)
  const addError = () => {
    setError(errors + 1)
  }
  const resetError = () => {
    setError(0)
  }

  return (
    <ErrorContext.Provider value={{ errors, addError, resetError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export const QuestionListContext = createContext()

export const QuestionListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [questionList, setQuestion] = useState([])
  const oldQuestion = (questionID) => {
    questionList.push(questionID)
  }

  const resetList = () => {
    questionList.splice(0, questionList.length)
  }

  return (
    <QuestionListContext.Provider
      value={{ questionList, oldQuestion, resetList }}
    >
      {children}
    </QuestionListContext.Provider>
  )
}

export const AnswerSelectedContext = createContext()

export const SelectedAnswerProvider = ({ children }) => {
  const [listAnswer] = useState([])
  const changeClicked = (answer) => {
    if (listAnswer.length === 1 && answer !== listAnswer[0]) {
      listAnswer.splice(0, 1, answer)
    }
    if (listAnswer.length === 0) {
      listAnswer.push(answer)
    }
  }

  return (
    <AnswerSelectedContext.Provider value={{ listAnswer, changeClicked }}>
      {children}
    </AnswerSelectedContext.Provider>
  )
}

export const IdContext = createContext()

export const IdProvider = ({ children }) => {
  const [id] = useState([])
  const changeId = (newId) => {
    id.splice(0, 1, newId)
  }

  return (
    <IdContext.Provider value={{ id, changeId }}>{children}</IdContext.Provider>
  )
}

export const ConnexionContext = createContext()

export const ConnexionProvider = ({ children }) => {
  const [connected, setConnected] = useState(false)
  const changeConnected = () => {
    setConnected(connected === true ? false : true)
  }

  return (
    <ConnexionContext.Provider value={{ connected, changeConnected }}>
      {children}
    </ConnexionContext.Provider>
  )
}
