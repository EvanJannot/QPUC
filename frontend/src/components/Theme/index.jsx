import { ThemeSelector } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'
import { useHistory } from 'react-router-dom'

function Theme({ theme }) {
  const { choosenTheme, SelectTheme } = useContext(ThemeContext)
  let history = useHistory()

  function changeTheme(theme) {
    SelectTheme(theme)
    alert(`C'est parti pour un 4 à la suite sur le thème : ${choosenTheme}`)
    history.push('/4suite')
  }

  return (
    <ThemeSelector
      onClick={() => {
        changeTheme(theme)
      }}
    >
      {theme}
    </ThemeSelector>
  )
}

export default Theme
