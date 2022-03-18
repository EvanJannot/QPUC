import { ThemeSelector } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/index'

function Theme({ theme }) {
  const { choosenTheme, SelectTheme } = useContext(ThemeContext)
  function changeTheme(theme) {
    SelectTheme(theme)
    console.log(theme)
    console.log(choosenTheme)
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
