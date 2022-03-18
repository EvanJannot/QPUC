import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const ThemeSelector = styled.div`
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
