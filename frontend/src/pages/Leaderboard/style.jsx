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
  border: 4px solid #000000;
  border-radius: 25px;
  width: 40%;
  height: ${({ numberPseudo }) => `${numberPseudo}px`};
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
`

export const PageTitle = styled.div`
  display: flex;
  width: 32%;
  height: 80%;
  align-items: center;
  justify-content: center;
  align-self: center;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);

  font-size: 40px;
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  background: ${colors.linearOrange};
`
export const UpPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
`
