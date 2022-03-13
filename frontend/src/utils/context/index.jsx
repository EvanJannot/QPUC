import React, { useState, createContext } from 'react'

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
