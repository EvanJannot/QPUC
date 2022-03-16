import React, { useState, createContext } from 'react'

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
