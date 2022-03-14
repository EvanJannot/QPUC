import React, { useEffect, useState } from 'react'

function Table() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4200/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        setUser(requestData)
      })
  }, [])

  function renderTableHeader() {
    let header = ['pseudo', 'score']
    return header.map((key, index) => {
      return <th key={index + 1}>{key.toUpperCase()}</th>
    })
  }

  function renderTableData() {
    return user.map((joueur) => {
      const { _id, username, highscore } = joueur
      return (
        <tr key={_id}>
          <td>{username}</td>
          <td>{highscore}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default Table
