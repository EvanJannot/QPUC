import styled from 'styled-components'

export const AnswerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;

  background: ${({ clicked }) => (clicked ? '#50A0D3' : 'white')};
  font-size: 24px;
  width: 250px;
  height: 60px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`
