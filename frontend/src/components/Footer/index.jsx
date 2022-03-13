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
  padding-top: 60px;
`

const NightModeButton = styled.button``

function Footer() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { pathname } = useLocation()
  if (pathname === '/' || pathname === '/register') {
    return null
  }
  return (
    <FooterContainer>
      <NightModeButton onClick={() => changeConnected()}>
        {connected === true ? 'Se déconnecter' : 'Se connecter'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
