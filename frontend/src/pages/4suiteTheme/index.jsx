import { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext, ThemeContext } from '../../utils/context'

import Theme from '../../components/Theme/index'
import { Suite4Wrapper, Title, Themes, OverlayTheme } from './style'

function Suite4Theme() {
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  const { choosenTheme } = useContext(ThemeContext)
  const [actualTheme, setActual] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  function ChangeTheme() {
    console.log(choosenTheme[0])
    setActual(choosenTheme[0])
  }

  return (
    <Suite4Wrapper>
      <Title>Veuillez choisir un thème</Title>
      {actualTheme === '' ? (
        <Themes>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Ecole'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Enseignants'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Eleve'} />
          </div>
          <div
            onClick={() => {
              ChangeTheme()
            }}
          >
            <Theme theme={'Vie Etudiante'} />
          </div>
        </Themes>
      ) : (
        <OverlayTheme>
          C'est parti pour un 4 à la suite sur le thème : {choosenTheme}
        </OverlayTheme>
      )}
    </Suite4Wrapper>
  )
}

export default Suite4Theme
