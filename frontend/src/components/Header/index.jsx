import Logo from '../../assets/LogoB.svg'
import DisconectIcon from '../../assets/disconnect.svg'
import { useContext } from 'react'
import { ConnexionContext } from '../../utils/context'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 10%;
  padding-top: 15px;
  background: #1f2869;
`

const DisconnectButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-family: 'Changa One', 'sans-serif';
  margin-right: 30px;
  font-size: 16px;
  background: #f2a616;
  width: 65px;
  height: 65px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
`
const Illustration = styled.img`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const Icon = styled.img`
  width: 70%;
  height: 70%;
`

function Header() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { pathname } = useLocation()
  if (pathname === '/' || pathname === '/register') {
    return null
  }
  return (
    <HeaderContainer>
      <Illustration src={Logo} />
      <DisconnectButton onClick={() => changeConnected()}>
        {connected === true ? <Icon src={DisconectIcon} /> : ' '}
      </DisconnectButton>
    </HeaderContainer>
  )
}

export default Header
