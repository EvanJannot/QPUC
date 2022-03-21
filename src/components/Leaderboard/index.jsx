import React, { useEffect, useState } from 'react'
import { Column, Line, Wrapper, Separation, TableDiv } from './style'

function Table() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch(`https://qpuc-backend.herokuapp.com/api/auth`)
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
        <div>
          <Separation />
          <Line key={_id}>
            <Column>{username}</Column>
            <Column>{highscore}</Column>
          </Line>
        </div>
      )
    })
  }

  return (
    <Wrapper>
      <TableDiv>
        <tbody>
          <Line>
            {' '}
            <Column>PSEUDO</Column>
            <Column>SCORE</Column>
          </Line>
          <Separation />
          {renderTableData()}
        </tbody>
      </TableDiv>
    </Wrapper>
  )
}

export default Table
