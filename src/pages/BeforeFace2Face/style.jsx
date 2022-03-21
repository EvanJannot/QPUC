import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 90%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 90%;
  background: ${colors.linearWhite};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const TextWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 26px;
`

export const Title = styled.p`
  display: flex;
  width: 40%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-size: 40px;
`

export const PlayButton = styled(Link)`
  display: flex;
  width: 25%;
  height: 10%;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: 'Changa One', 'sans-serif';

  background: ${colors.yellow};
  border: 2px solid #000000;
`
