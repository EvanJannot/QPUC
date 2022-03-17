import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const LeaderboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
`

export const TableBg = styled.div`
  background: white;
  border: 2px solid #000000;
  border-radius: 25px;
`

export const PageTitle = styled.div`
  display: flex;
  width: 32%;
  height: 10%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  font-size: 40px;
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  background: ${colors.linearOrange};
`
