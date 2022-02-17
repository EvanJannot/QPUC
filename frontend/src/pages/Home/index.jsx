import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

import '../../style/Home.css'

const HomeWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`
const Illustration = styled.img`
  align-self: center;
  max-width: 45%;
  max-height: 45%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  width: 40%;
  height: 45%;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

const Input = styled.input`
  height: 40px;
  width: 350px;
  background: #caddee;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`

const Login = styled.form`
  display: flex;
  flex-direction: column;
`

const LoginButton = styled.input`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  background: #fee301;
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
`
const RegisterButton = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  background: #f2a616;
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

function Home() {
  return (
    <HomeWrapper>
      <Illustration src={Logo} />
      <Container>
        <Login>
          <label style={{ 'font-size': '30px' }}>Nom d'utilisateur :</label>
          <Input
            type="text"
            name="username"
            placeholder="Entrez votre nom d'utilisateur"
          />
          <br />
          <br />
          <label style={{ 'font-size': '30px' }}>Mot de passe :</label>
          <Input
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
          />
          <br />
          <LoginButton type="submit" value="CONNEXION" />
        </Login>
      </Container>
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
