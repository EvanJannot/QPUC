import {
  RegisterWrapper,
  Title,
  Container,
  RegisterButton,
  Input,
} from '../../style/Register'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import '../../style/Home.css'

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
`

function Register() {
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
          />
          <br />
          <br />
          <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
          <Input
            type="password"
            name="password"
            placeholder="Choisissez un mot de passe"
          />
          <br />
          <Link to="">
            <RegisterButton type="submit" value="VALIDER" />
          </Link>
        </RegisterForm>
      </Container>
    </RegisterWrapper>
  )
}

export default Register
