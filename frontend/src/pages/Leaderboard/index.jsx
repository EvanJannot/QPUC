import { LeaderboardWrapper, PageTitle, TableBg, UpPage } from './style'
import { useHistory, useLocation } from 'react-router-dom'
import TableL from '../../components/Leaderboard/'
import { ConnexionContext } from '../../utils/context'
import { useEffect, useContext, useState } from 'react'
import Return from '../../components/Return'

function Leaderboard() {
  const [nbpseudo, setNBPseudo] = useState(1)
  const { pathname } = useLocation()
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)

  useEffect(() => {
    fetch(`http://localhost:4200/api/auth`) //On récupère les utilisateurs de la bdd
      .then((response) => response.json())
      .then((requestData) => {
        //On parcourt la liste des utilisateurs
        setNBPseudo(requestData.length + 1)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <TableBg numberPseudo={nbpseudo * 48}>
        <TableL />
      </TableBg>
    </LeaderboardWrapper>
  )
}

export default Leaderboard
