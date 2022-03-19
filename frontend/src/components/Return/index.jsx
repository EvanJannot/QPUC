import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/goBack.svg'

export const Arrow = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
  position: absolute;
  width: 80px;
  height: 60px;
  background: white;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`
export const Illustration = styled.img`
  display: flex;
  align-self: center;
`

function Return() {
  const history = useHistory()
  function goBack() {
    history.goBack()
  }

  return (
    <Arrow
      onClick={() => {
        goBack()
      }}
    >
      <Illustration src={Logo} />
    </Arrow>
  )
}

export default Return
