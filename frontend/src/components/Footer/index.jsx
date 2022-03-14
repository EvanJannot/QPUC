import { useContext } from 'react'
import { ConnexionContext } from '../../utils/context'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 10%;
  background: #f2a615;
  border: 4px solid #000000;
`

const DisconnectButton = styled.button`
  align-items: center;
  align-self: center;
  justify-content: center;
  font-family: 'Changa One', 'sans-serif';
  font-size: 16px;
  background: #fee301;
  width: 130px;
  height: 65px;
`

function Footer() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { pathname } = useLocation()
  if (pathname === '/' || pathname === '/register') {
    return null
  }
  return (
    <FooterContainer>
      <DisconnectButton onClick={() => changeConnected()}>
        {connected === true ? 'DECONNEXION' : ' '}
      </DisconnectButton>
    </FooterContainer>
  )
}

export default Footer
