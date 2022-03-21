import { useHistory } from 'react-router-dom'
import Logo from '../../assets/goBack.svg'
import { Arrow, Illustration } from './style'

function Return(path) {
  const history = useHistory()
  function goBack() {
    if (path.path === '/leaderboard') {
      history.push('/rules')
    } else {
      history.goBack()
    }
  }

  return (
    <Arrow
      onClick={() => {
        goBack()
      }}
      page={path.path}
    >
      <Illustration src={Logo} />
    </Arrow>
  )
}

export default Return
