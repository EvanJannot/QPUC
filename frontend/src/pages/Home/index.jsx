import Logo from '../../assets/Logo.svg'
import {
  HomeWrapper,
  Illustration,
  Container,
  RegisterButton,
} from '../../style/Home'

import Login from '../../components/Login'

import '../../style/Home.css'

function Home() {
  return (
    <HomeWrapper>
      <Illustration src={Logo} />
      <Container>
        <Login />
      </Container>
      <RegisterButton to="/register" $isFullLink>
        S'INSCRIRE
      </RegisterButton>
    </HomeWrapper>
  )
}

export default Home
