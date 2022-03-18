import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Answer from '../../components/Answer'

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

export const Timer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  font-family: 'Changa One', 'sans-serif';
  color: white;
  font-size: 40px;
`

export const TimerCounter = styled.div`
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

export const Pass = styled.div`
  margin-top: 30px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background: ${colors.linearOrange};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: 'Changa One', 'sans-serif';
`

export const PointsBar = styled.div`
  margin-top: 30px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 180px;
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

  border: 4px solid #000000;
  box-sizing: border-box;
  font-size: 50px;
`

function Suite4() {
  // let history = useHistory()
  // const { connected } = useContext(ConnexionContext)
  // useEffect(() => {
  //   if (connected === false) {
  //     history.push('/')
  //   }
  // }, [history, connected])
  return (
    <Wrapper>
      <InfoWrapper>
        <Time>
          Temps :<TimeCounter>0</TimeCounter>
        </Time>
        <Timer>
          Temps restant :<TimerCounter>0</TimerCounter>
        </Timer>
        <Errors>
          Erreurs :<ErrorsCounter>0</ErrorsCounter>
        </Errors>
      </InfoWrapper>
      <AnswersWrapper>
        <Question>Question</Question>
        <QuestionPoints>POINT(S)</QuestionPoints>
        <Answers>
          <Answer answer={'réponse'} question={''}></Answer>
          <Answer answer={'réponse'} question={''}></Answer>
          <Answer answer={'réponse'} question={''}></Answer>
          <Answer answer={'réponse'} question={''}></Answer>
        </Answers>
      </AnswersWrapper>
      <Pass>Passer</Pass>
      <PointsBar>
        <Point>1</Point>
        <Point>2</Point>
        <Point>3</Point>
        <Point>4</Point>
      </PointsBar>
    </Wrapper>
  )
}

export default Suite4
