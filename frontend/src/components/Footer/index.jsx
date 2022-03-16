import { FooterContainer, Repository, Credits, GitHub } from './style'

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
