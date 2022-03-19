import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  PlayButton,
  RulesWrapper,
  Wrapper,
  TextWrapper,
  LeaderboardButton,
} from './style'
import { ConnexionContext } from '../../utils/context'

function Rules() {
  window.scrollTo(0, 0)
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <RulesWrapper>
      <Wrapper>
        <TextWrapper>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
          elementum odio. Curabitur eget massa a nisi congue aliquet ut ac ex.
          Curabitur euismod convallis felis, congue vehicula diam ultrices
          fringilla. Curabitur aliquet dictum purus nec pharetra. Fusce auctor
          lectus faucibus justo vehicula, vitae laoreet velit tempor. Morbi
          sagittis viverra aliquam. Vestibulum vitae nisi ex. Aenean suscipit
          velit ac ipsum euismod euismod. Integer sed sem condimentum, faucibus
          velit vel, dictum odio. Phasellus sodales fermentum mi, quis tincidunt
          lacus ornare in. Proin vitae lacinia massa. Phasellus metus sapien,
          dapibus vitae velit in, elementum viverra risus. Nunc vestibulum et
          leo non imperdiet. Vestibulum accumsan odio eget leo commodo, et
          euismod augue maximus. Ut dapibus, purus convallis vestibulum
          bibendum, est erat condimentum arcu, a tempus libero tortor et nisi.
          Integer tincidunt ornare feugiat. Sed vitae luctus tortor, at auctor
          mauris. Maecenas augue tortor, dictum quis tincidunt vitae, faucibus
          at eros. Etiam rhoncus lobortis tortor, id consectetur mi lobortis id.
          Donec orci tellus, commodo a mauris ac, commodo feugiat lectus. Etiam
          quis tortor interdum, pellentesque diam eget, faucibus neque. Vivamus
          egestas lacus porta, venenatis tortor in, aliquet sapien. Nam ac
          malesuada arcu. In hac habitasse platea dictumst. Ut rhoncus elit
          suscipit malesuada aliquet. Suspendisse non maximus dolor. Fusce
          elementum elit sed blandit lobortis. Sed semper porta lobortis. Ut
          eleifend ut urna in egestas. Donec tristique libero libero, at semper
          dolor feugiat pellentesque. Nullam scelerisque, ex tincidunt consequat
          euismod, lectus metus pellentesque massa, sit amet interdum lectus
          risus ut nisi.
        </TextWrapper>
        <PlayButton to="/9gagnants" $isFullLink>
          JOUER
        </PlayButton>
        <LeaderboardButton to="/leaderboard" $isFullLink>
          LEADERBOARD
        </LeaderboardButton>
      </Wrapper>
    </RulesWrapper>
  )
}

export default Rules
