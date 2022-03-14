import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RulesWrapper = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 90%;
  background: linear-gradient(180deg, #ffffff 0%, #caddee 100%);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const TextWrapper = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-left:30px;
  margin-right:30px;
  margin-top:30px;
  }
`

export const PlayButton = styled(Link)`
  display: flex;
  width: 300px;
  height: 50px;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: 'Changa One', 'sans-serif';

  background: #fee301;
  border: 2px solid #000000;
`
export const LeaderboardButton = styled(Link)`
  display: flex;
  width: 200px;
  height: 50px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Changa One', 'sans-serif';

  background: #f2a616;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`
