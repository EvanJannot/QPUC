import Logo from '../../assets/Logo.svg'
import { useState, useEffect, useRef, useContext } from 'react'
import {
  Input,
  LoginButton,
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
  OverlayForm,
  ErrorMessage,
} from './style'
import { Loader } from '../../utils/style/Atoms'
import { useHistory } from 'react-router-dom'
import { ConnexionContext, IdContext } from '../../utils/context'

import '../../utils/style/Home.css'

function Home() {
  //On défini avec le state le pseudo, mdp et l'état du formulaire
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])
  const [stateForm, setStateForm] = useState([])
  const [countSendForm, setSendForm] = useState([])
  const [message, setMessage] = useState('')
  const [isDataLoading, setDataLoading] = useState(false)

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
      setDataLoading(true)
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

              setMessage('Connexion réussie !') //On met un message de réussite

              //On attend que l'utilisateur puisse lire le message et on redirige
              setTimeout(function () {
                changeId(requestData[i]._id)
                changeConnected() //On change l'état de connexion
                history.push('/rules') //Redirige vers la page des règles
                setStateForm(false) //On change l'état du formulaire
                setMessage('')
              }, 2000)
              break
            }
            if (i === requestData.length - 1 && stateForm === true) {
              //Sinon, on repasse à false l'état d'envoi du formulaire et on notifie de l'erreur

              setMessage('Identifiant ou mot de passe incorrect') //On met un message d'erreur
              setTimeout(function () {
                //On attend que l'utilisateur puisse lire le message
                setStateForm(false)
                setMessage('')
              }, 1000)
            }
          }
          setDataLoading(false)
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
      {isDataLoading ? (
        <Loader />
      ) : stateForm === true ? (
        message === 'Connexion réussie !' ? (
          <OverlayForm>{message}</OverlayForm>
        ) : (
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
            <ErrorMessage>{message}</ErrorMessage>
            <LoginButton onClick={sendForm}>CONNEXION</LoginButton>
          </Container>
        )
      ) : (
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
      )}
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
