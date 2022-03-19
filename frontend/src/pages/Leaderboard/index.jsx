import { LeaderboardWrapper, PageTitle, TableBg, UpPage } from './style'
import { useHistory, useLocation } from 'react-router-dom'
import TableL from '../../components/Leaderboard/'
import { ConnexionContext } from '../../utils/context'
import { useEffect, useContext } from 'react'
import Return from '../../components/Return'

function Leaderboard() {
  const { pathname } = useLocation()
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <LeaderboardWrapper>
      <UpPage>
        <Return path={pathname} />
        <PageTitle>LEADERBOARD</PageTitle>
      </UpPage>
      <TableBg>
        <TableL />
      </TableBg>
    </LeaderboardWrapper>
  )
}

export default Leaderboard
