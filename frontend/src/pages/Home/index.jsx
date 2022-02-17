import Logo from '../../assets/Logo.svg'
import {
  HomeWrapper,
  Illustration,
  Container,
  Input,
  Login,
  LoginButton,
  RegisterButton,
} from '../../style/Home'

import '../../style/Home.css'

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
