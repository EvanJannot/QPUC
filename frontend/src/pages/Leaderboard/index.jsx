import { LeaderboardWrapper, PageTitle, TableBg, UpPage } from './style'
import { useHistory } from 'react-router-dom'
import TableL from '../../components/Leaderboard/'
import { ConnexionContext } from '../../utils/context'
import { useEffect, useContext } from 'react'
import Return from '../../components/Return'

function Leaderboard() {
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])

  return (
    <LeaderboardWrapper>
      <UpPage>
        <Return />
        <PageTitle>LEADERBOARD</PageTitle>
      </UpPage>
      <TableBg>
        <TableL />
      </TableBg>
    </LeaderboardWrapper>
  )
}

export default Leaderboard
