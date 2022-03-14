import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Column = styled.td`
  display: flex;
  justify-content: center;
  margin-right: 20px;
  font-family: 'Changa One', 'sans-serif';
  width: 500px;
  font-size: 32px;
`

const Line = styled.tr`
  display: flex;
  align-self: center;
  font-family: 'Changa One', 'sans-serif';
  font-size: 32px;
  width: 500px;
`
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
`

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
