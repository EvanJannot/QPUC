import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

export const ScoreWrapper = styled.div`
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 3%;
  width: 35%;
  height: 60%;
  background: white;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const TotalTime = styled.div`
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`

export const TotalErrors = styled.div`
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`
export const Separation = styled.div`
  display: flex;
  align-self: center;
  margin-top: 30px;
  left: 0;
  height: 2%;
  width: 100.5%;
  background: black;
`

export const FinalScore = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';
`

export const ScoreNumber = styled.div`
  display: flex;
  align-self: center;
  margin-top: 30px;
  font-size: 50px;
  font-family: 'Changa One', 'sans-serif';
`

export const LeaderboardButton = styled(Link)`
  display: flex;
  margin-top: 40px;
  width: 300px;
  height: 80px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-family: 'Changa One', 'sans-serif';

  background: ${colors.orange};
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`
