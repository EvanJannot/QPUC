import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`

function Register() {
  return <HomeWrapper></HomeWrapper>
}

export default Register
