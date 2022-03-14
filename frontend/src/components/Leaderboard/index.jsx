import React, { useState } from 'react'

function Table() {
  const [user, setUser] = useState({})
  const data = {
    student: [
      { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
      { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
      { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
    ],
  }
  setUser(data)
  console.log(data)
  console.log(user)

  function renderTableHeader() {
    let header = ['pseudo', 'score']
    return header.map((key, index) => {
      return <th key={index + 1}>{key.toUpperCase()}</th>
    })
  }

  function renderTableData() {
    return user.map((student) => {
      const { id, name, age } = student //destructuring
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table id="students">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default Table
