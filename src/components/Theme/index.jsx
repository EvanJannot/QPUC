import { ThemeSelector } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'
import { useHistory } from 'react-router-dom'

function Theme({ theme }) {
  const { SelectTheme } = useContext(ThemeContext)
  let history = useHistory()

  function changeTheme(theme) {
    SelectTheme(theme)
    setTimeout(function () {
      history.push('/4suite')
    }, 2000)
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
