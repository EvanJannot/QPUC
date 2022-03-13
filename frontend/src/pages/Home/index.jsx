import Logo from '../../assets/Logo.svg'
import { useState, useEffect, useRef, useContext } from 'react'
import { Input, Login, LoginButton } from '../../style/Home'
import { useHistory } from 'react-router-dom'
import {
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
} from '../../style/Home'
import { ConnexionContext } from '../../utils/context'

import '../../style/Home.css'

function Home() {
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [stateForm, setStateForm] = useState([])
  const [countSendForm, setSendForm] = useState([])
  const { changeConnected } = useContext(ConnexionContext)
  let history = useHistory()
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
    } else {
      fetch(`http://localhost:4200/api/auth`)
        .then((response) => response.json())
        .then((requestData) => {
          for (let i = 0; i < requestData.length; i++) {
            if (
              requestData[i].username.toString() === username &&
              requestData[i].password.toString() === password
            ) {
              alert('Connexion réussie !')
              changeConnected()
              history.push('/rules')
              this.setStateForm(false)
            }
            if (i === requestData.length - 1 && stateForm === true) {
              setStateForm(false)
              alert('Identifiant ou mot de passe incorrect')
            }
          }
        })
        .catch((error) => console.log(error))
    }
  }, [history, countSendForm])

  function sendForm() {
    setStateForm(true)
    setSendForm(countSendForm + 1)
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
