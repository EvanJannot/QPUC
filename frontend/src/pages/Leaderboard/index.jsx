import { LeaderboardWrapper, PageTitle } from '../../style/Leaderboard'
import { useHistory } from 'react-router-dom'
import TableL from '../../components/Leaderboard/'
import { ConnexionContext } from '../../utils/context'
import { useEffect, useContext } from 'react'

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
      <PageTitle>LEADERBOARD</PageTitle>
      <TableL />
    </LeaderboardWrapper>
  )
}

export default Leaderboard
