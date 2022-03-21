import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Wrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 120%;
  background: ${colors.linearBlue};
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 30%;
  color: black;
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  font-family: 'Changa One', 'sans-serif';
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

  -webkit-text-stroke: 1.5px black;
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

  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
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

  -webkit-text-stroke: 1.5px black;
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

  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);
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

  -webkit-text-stroke: 1.5px black;
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

  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
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
  justify-content: space-evenly;
  align-items: center;

  width: 50%;
  height: 50%;

  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
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

export const Answers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
`

export const PointsBar = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 80px;
  background: white;
  box-sizing: border-box;
  border: 4px solid #000000;
  font-family: 'Changa One', 'sans-serif';
`

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 105%;
  height: 104%;

  background: ${({ value, score }) => (value <= score ? '#50A0D3' : 'white')};
  border: 4px solid #000000;
  box-sizing: border-box;
  font-size: 50px;
`
