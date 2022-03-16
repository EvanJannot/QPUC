import React, { useEffect, useState } from 'react'
import { Column, Line, Wrapper } from './style'

function Table() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4200/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        setUser(requestData)
      })
  }, [])

  function renderTableData() {
    user.sort((a, b) => b.highscore - a.highscore)
    return user.map((joueur) => {
      const { _id, username, highscore } = joueur
      return (
        <Line key={_id}>
          <Column>{username}</Column>
          <Column>{highscore}</Column>
        </Line>
      )
    })
  }

  return (
    <Wrapper>
      <table>
        <tbody>
          <Line>
            {' '}
            <Column>PSEUDO</Column>
            <Column>SCORE</Column>
          </Line>
          {renderTableData()}
        </tbody>
      </table>
    </Wrapper>
  )
}

export default Table
