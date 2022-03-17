import Logo from '../../assets/LogoB.svg'
import DisconectIcon from '../../assets/disconnect.svg'
import { useContext } from 'react'
import { ConnexionContext } from '../../utils/context'
import { HeaderContainer, DisconnectButton, Illustration, Icon } from './style'
import { useLocation } from 'react-router-dom'

function Header() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { pathname } = useLocation()
  if (
    pathname !== '/rules' ||
    pathname !== '/leaderboard' ||
    pathname !== '/9gagnants' ||
    pathname !== '/4suite'
  ) {
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
