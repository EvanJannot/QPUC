import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext } from '../../utils/context'

function Suite4() {
  let history = useHistory()
  const { connected } = useContext(ConnexionContext)
  useEffect(() => {
    if (connected === false) {
      history.push('/')
    }
  }, [history, connected])
  return <div></div>
}

export default Suite4
