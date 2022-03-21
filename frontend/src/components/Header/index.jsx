import Logo from '../../assets/LogoB.svg'
import DisconectIcon from '../../assets/disconnect.svg'
import SoundOn from '../../assets/sound.svg'
import SoundOff from '../../assets/mute.svg'
import { useContext } from 'react'
import {
  ConnexionContext,
  ErrorContext,
  QuestionListContext,
  ScoreContext,
  TimeContext,
  SoundContext,
} from '../../utils/context'
import {
  HeaderContainer,
  DisconnectButton,
  Illustration,
  Icon,
  SoundButton,
} from './style'
import { useLocation, useHistory } from 'react-router-dom'

function Header() {
  const { changeConnected, connected } = useContext(ConnexionContext)
  const { resetError } = useContext(ErrorContext)
  const { resetScore } = useContext(ScoreContext)
  const { resetTime } = useContext(TimeContext)
  const { resetList } = useContext(QuestionListContext)
  const { pathname } = useLocation()
  const { soundState, changeSound } = useContext(SoundContext)
  let history = useHistory()
  if (
    pathname !== '/rules' &&
    pathname !== '/leaderboard' &&
    pathname !== '/9gagnants' &&
    pathname !== '/4suiteTheme' &&
    pathname !== '/4suite' &&
    pathname !== '/beforeFace2Face' &&
    pathname !== '/faceaface' &&
    pathname !== '/score'
  ) {
    return null
  } else {
    return (
      <HeaderContainer>
        <Illustration src={Logo} />
        <SoundButton
          onClick={() => {
            changeSound()
            console.log('here')
          }}
        >
          {soundState === true ? (
            <Icon src={SoundOn} />
          ) : (
            <Icon src={SoundOff} />
          )}
        </SoundButton>
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
