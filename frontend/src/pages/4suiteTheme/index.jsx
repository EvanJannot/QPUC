import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext } from '../../utils/context'

import Theme from '../../components/Theme/index'
import { Suite4Wrapper, Title, Themes } from './style'

function Suite4Theme() {
  // let history = useHistory()
  // const { connected } = useContext(ConnexionContext)
  // useEffect(() => {
  //   if (connected === false) {
  //     history.push('/')
  //   }
  // }, [history, connected])
  return (
    <Suite4Wrapper>
      <Title>Veuillez choisir un thème</Title>
      <Themes>
        <Theme theme={'Ecole'} />
        <Theme theme={'Enseignants'} />
        <Theme theme={'Eleve'} />
        <Theme theme={'Vie Etudiante'} />
      </Themes>
    </Suite4Wrapper>
  )
}

export default Suite4Theme
