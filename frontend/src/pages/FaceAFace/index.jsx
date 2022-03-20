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

export const InfoWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  width: 70%;
  padding-top: 20px;
  padding-bottom: 20px;
`

function FaceAFace() {
  return (
    <Wrapper>
      <InfoWrapper></InfoWrapper>
    </Wrapper>
  )
}

export default FaceAFace
