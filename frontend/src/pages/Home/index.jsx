import Logo from '../../assets/Logo.svg'
import { useState, useEffect } from 'react'
import { Input, Login, LoginButton } from '../../style/Home'
import { useHistory } from 'react-router-dom'
import {
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
} from '../../style/Home'

import '../../style/Home.css'

function Home() {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [stateForm, setStateForm] = useState([])
  let history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:4200/api/auth`)
      .then((response) => response.json())
      .then((requestData) => {
        if (
          requestData[0].username.toString() === username &&
          requestData[0].password.toString() === password &&
          stateForm === true
        ) {
          history.push('/register')
        } else {
        }
      })
      .catch((error) => console.log(error))
  }, [history, password, stateForm, username])

  function sendForm() {
    setStateForm(true)
    alert("Nom d'utilisateur : " + username + '\nMot de passe : ' + password)
  }

  function changeUsername(event) {
    setUsername(event)
  }

  function changePassword(event) {
    setPassword(event)
  }

  return (
    <HomeWrapper>
      <Illustration src={Logo} />
      <Container>
        <Login>
          <label style={{ 'font-size': '30px' }}>Nom d'utilisateur :</label>
          <Input
            type="text"
            onChange={(event) => {
              changeUsername(event.target.value)
            }}
            name="username"
            placeholder="Entrez votre nom d'utilisateur"
          />
          <br />
          <br />
          <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
          <Input
            type="password"
            onChange={(event) => {
              changePassword(event.target.value)
            }}
            name="password"
            placeholder="Entrez votre mot de passe"
          />
          <br />
          <LoginButton onClick={sendForm}>CONNEXION</LoginButton>
        </Login>
      </Container>
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
