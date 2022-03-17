import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const AnswerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;

  background: ${({ clicked }) => (clicked ? colors.blue : 'white')};
  font-size: 24px;
  width: 250px;
  height: 60px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`
