import Logo from '../../assets/LogoB.svg'
import DisconectIcon from '../../assets/disconnect.svg'
import { useContext } from 'react'
import {
  ConnexionContext,
  ErrorContext,
  QuestionListContext,
  ScoreContext,
  TimeContext,
} from '../../utils/context'
import { HeaderContainer, DisconnectButton, Illustration, Icon } from './style'
import { useLocation, useHistory } from 'react-router-dom'

function Header() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { resetError } = useContext(ErrorContext)
  const { resetScore } = useContext(ScoreContext)
  const { resetTime } = useContext(TimeContext)
  const { resetList } = useContext(QuestionListContext)
  const { pathname } = useLocation()
  let history = useHistory()
  if (
    pathname !== '/rules' &&
    pathname !== '/leaderboard' &&
    pathname !== '/9gagnants' &&
    pathname !== '/4suiteTheme' &&
    pathname !== '/4suite' &&
    pathname !== '/score'
  ) {
    return null
  } else {
    return (
      <HeaderContainer>
        <Illustration src={Logo} />
        <DisconnectButton
          onClick={() => {
            changeConnected()
            resetError()
            resetScore()
            resetTime()
            resetList()
            history.push('/')
          }}
        >
          {connected === true ? <Icon src={DisconectIcon} /> : ' '}
        </DisconnectButton>
      </HeaderContainer>
    )
  }
}

export default Header
