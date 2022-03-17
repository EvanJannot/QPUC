import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const MainWrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
`

export const InfoWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';

  color: white;
  font-size: 40px;
`

export const TimeCounter = styled.div`
  display: flex;
  width: 187px;
  height: 106px;

  align-items: center;
  justify-content: center;

  background: ${colors.lightBlue};
  border: 2px solid #000000;
  box-sizing: border-box;
  font-size: 60px;
  color: black;
  border-radius: 25px;
`

export const Score = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
`

export const ScoreCounter = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 154px;
  height: 154px;

  box-sizing: border-box;
  border-radius: 100px;
  background: #ffffff;

  font-family: 'Changa One', 'sans-serif';
  font-size: 60px;
  color: black;
  border: 3px solid #000000;
  box-sizing: border-box;
`

export const Errors = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
`
export const ErrorsCounter = styled.div`
  display: flex;

  align-self: center;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 106px;

  color: black;
  font-size: 60px;
  background: ${colors.lightBlue};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`

export const AnswersWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 50%;
  height: 50%;

  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const Question = styled.div`
  text-align: center;
  font-family: 'Changa One', 'sans-serif';
  font-size: 32px;
`

export const Theme = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 24px;
`

export const QuestionPoints = styled.div`
  font-family: 'Changa One', 'sans-serif';
  font-size: 24px;
`

export const Answers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
`
