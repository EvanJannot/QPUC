import { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ConnexionContext } from '../../utils/context'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Suite4Wrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  -webkit-text-stroke: 2px black;
  font-family: 'Changa One', 'sans-serif';
`

export const Themes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 1200px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
`
export const Theme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 80px;
  margin-right: 40px;
  margin-left: 40px;

  background: ${colors.linearOrange};
  font-size: 30px;
  width: 500px;
  height: 150px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`

function Suite4Theme() {
  // let history = useHistory()
  // const { connected } = useContext(ConnexionContext)
  // useEffect(() => {
  //   if (connected === false) {
  //     history.push('/')
  //   }
  // }, [history, connected])
  return (
    <Suite4Wrapper>
      <Title>Veuillez choisir un thème</Title>
      <Themes>
        <Theme>Thème 1</Theme>
        <Theme>Thème 2</Theme>
        <Theme>Thème 3</Theme>
        <Theme>Thème 4</Theme>
      </Themes>
    </Suite4Wrapper>
  )
}

export default Suite4Theme
