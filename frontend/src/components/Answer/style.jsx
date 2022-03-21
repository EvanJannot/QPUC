import styled from 'styled-components'

export const AnswerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;

  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;

  background: ${({ clicked }) =>
    clicked ? ({ goodAnswer }) => (goodAnswer ? '#03c756' : 'red') : 'white'};
  font-size: 20px;
  padding: 5px;
  width: 250px;
  height: 60px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`