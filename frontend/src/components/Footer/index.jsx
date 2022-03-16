import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10%;
  background: #caddee;
  border-top: 4px solid #000000;
`

const Repository = styled.div`
  font-family: 'Changa One', 'sans-serif';
`

const Credits = styled.div`
  font-family: 'Changa One', 'sans-serif';
`
const GitHub = styled(Link)`
  font-family: 'Changa One', 'sans-serif';
`

function Footer() {
  return (
    <FooterContainer>
      <Credits>Made by Evan Jannot</Credits>
      <Repository>
        <GitHub to="//github.com/EvanJannot/QPUC" $isFullLink target="_blank">
          Check the project's GitHub
        </GitHub>
      </Repository>
    </FooterContainer>
  )
}

export default Footer
