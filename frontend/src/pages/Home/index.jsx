import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'

const HomeWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`
const Illustration = styled.img`
  max-width: 45%;
  max-height: 45%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 26.32%;
  right: 26.39%;
  top: 46.29%;
  bottom: 17.09%;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

const Login = styled.input`
  max-height: 20px;
`
const Password = styled.input`
  max-height: 20px;
`

function Home() {
  return (
    <HomeWrapper>
      <Illustration src={Logo} />
      <Container>
        <Login></Login>
        <Password></Password>
      </Container>
    </HomeWrapper>
  )
}

export default Home
