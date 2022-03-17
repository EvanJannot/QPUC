import { useState } from 'react'
import {
  RegisterWrapper,
  Title,
  Container,
  RegisterButton,
  Input,
} from './style'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import '../../utils/style/Home.css'

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
`

function Register() {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  let history = useHistory()

  function changeUsername(event) {
    setUsername(event)
  }

  function changePassword(event) {
    setPassword(event)
  }

  const clickRegister = (e) => {
    if (username.length >= 3 && password.length >= 5) {
      fetch('http://localhost:4200/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message === 'Utilisateur créé !') {
            alert('Inscription effectuée !')
            history.push('/')
          } else {
            alert("Erreur lors de l'inscription")
          }
        })
    } else if (username.length === 0) {
      alert('Veuillez choisir un pseudo !\n (minimum 3 caractères)')
    } else if (username.length <= 3) {
      alert('Veuillez choisir un pseudo plus long ! \n (minimum 3 caractères)')
    } else if (password.length === 0) {
      alert('Veuillez choisir un mot de passe !\n (minimum 5 caractères)')
    } else {
      alert(
        'Veuillez choisir un mot de passe plus long ! \n (minimum 5 caractères)'
      )
    }
  }

  return (
    <RegisterWrapper>
      <Title>Inscription</Title>
      <Container>
        <RegisterForm>
          <label style={{ 'font-size': '30px' }}>Nom d'utilisateur :</label>
          <Input
            type="text"
            name="username"
            placeholder="Choisissez un nom d'utilisateur"
            onChange={(event) => {
              changeUsername(event.target.value)
            }}
          />
          <br />
          <br />
          <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
          <Input
            type="password"
            name="password"
            placeholder="Choisissez un mot de passe"
            onChange={(event) => {
              changePassword(event.target.value)
            }}
          />
          <br />
          <RegisterButton onClick={clickRegister}>S'INSCRIRE</RegisterButton>
        </RegisterForm>
      </Container>
    </RegisterWrapper>
  )
}

export default Register
