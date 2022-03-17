import React, { useState, createContext } from 'react'

export const ScoreContext = createContext()

export const ScoreProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [score, setScore] = useState(0)
  const addPoints = (points) => {
    setScore(score + points)
  }

  return (
    <ScoreContext.Provider value={{ score, addPoints }}>
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

  return (
    <ErrorContext.Provider value={{ errors, addError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export const QuestionListContext = createContext()

export const QuestionListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [questionList, setQuestion] = useState([])
  const oldQuestion = (questionID) => {
    console.log(questionList)
    questionList.push(questionID)
  }

  return (
    <QuestionListContext.Provider value={{ questionList, oldQuestion }}>
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
