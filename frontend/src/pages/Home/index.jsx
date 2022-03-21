import Logo from '../../assets/Logo.svg'
import { useState, useEffect, useRef, useContext } from 'react'
import {
  Input,
  LoginButton,
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
} from './style'
import { useHistory } from 'react-router-dom'
import { ConnexionContext, IdContext } from '../../utils/context'

import '../../utils/style/Home.css'

function Home() {
  //On défini avec le state le pseudo, mdp et l'état du formulaire
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [stateForm, setStateForm] = useState([])
  const [countSendForm, setSendForm] = useState([])

  //Avec le contexte on gère l'état de connexion de l'utilisateur
  const { changeConnected } = useContext(ConnexionContext)
  const { changeId } = useContext(IdContext)

  //history nous permet de rediriger vers une nouvelle page
  let history = useHistory()

  //Permet de ne pas vérifier le formulaire lors du chargement initial de la page
  const firstUpdate = useRef(true)

  //Ce useEffect est appelé à chaque envoi du formulaire
  useEffect(() => {
    //Si c'est le premier chargement de la page on ne fait rien

    if (firstUpdate.current) {
      firstUpdate.current = false
    } else {
      //Sinon

      fetch(`https://qpuc-backend.herokuapp.com/api/auth`) //On récupère les utilisateurs de la bdd
        .then((response) => response.json())
        .then((requestData) => {
          //On parcourt la liste des utilisateurs

          for (let i = 0; i < requestData.length; i++) {
            if (
              //On compare leurs pseudo et mdp

              requestData[i].username.toString() === username &&
              requestData[i].password.toString() === password
            ) {
              //Si on a une correspondance, on le notifie et on le redirige sur la page suivante

              alert('Connexion réussie !')
              changeId(requestData[i]._id)
              changeConnected() //On change l'état de connexion
              history.push('/rules')
              this.setStateForm(false)
            }
            if (i === requestData.length - 1 && stateForm === true) {
              //Sinon, on repasse à false l'état d'envoi du formulaire et on notifie de l'erreur

              setStateForm(false)
              alert('Identifiant ou mot de passe incorrect')
            }
          }
        })
        .catch((error) => console.log(error))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      </Container>
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
