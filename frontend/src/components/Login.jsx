import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input, Login, LoginButton } from '../style/Home'

export default class NameForm extends React.Component {
  constructor() {
    super()
    this.state = { username: '', password: '' }
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }
  changePassword(event) {
    this.setState({ password: event.target.value })
  }

  sendForm = (event) => {
    // const { username } = useParams()
    // const [usersData, setUsersData] = useState({})

    // fetch(`http://localhost:4200/api/auth/`).then((response) =>
    //   response
    //     .json()
    //     .then(({ usersData }) => console.log(usersData))
    //     .catch((error) => console.log(error))
    // )

    alert(
      "Nom d'utilisateur : " +
        this.state.username +
        '\nMot de passe : ' +
        this.state.password
    )
    // console.log(usersData[username])
  }

  render() {
    return (
      <Login onSubmit={this.sendForm}>
        <label style={{ 'font-size': '30px' }}>Nom d'utilisateur :</label>
        <Input
          type="text"
          onChange={this.changeUsername}
          name="username"
          placeholder="Entrez votre nom d'utilisateur"
        />
        <br />
        <br />
        <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
        <Input
          type="password"
          onChange={this.changePassword}
          name="password"
          placeholder="Entrez votre mot de passe"
        />
        <br />
        <LoginButton type="submit" value="CONNEXION" />
      </Login>
    )
  }
}
