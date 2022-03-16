import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext } from '../../utils/context'
import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 90%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`
export const AnswersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 90%;
  background: linear-gradient(180deg, #f2a616 0%, #fee301 65.1%);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

function Gagnants9() {
  //   let history = useHistory()
  //   const { connected } = useContext(ConnexionContext)
  //   useEffect(() => {
  //     if (connected === false) {
  //       history.push('/')
  //     }
  //   }, [history, connected])
  return (
    <MainWrapper>
      <AnswersWrapper></AnswersWrapper>
    </MainWrapper>
  )
}

export default Gagnants9
