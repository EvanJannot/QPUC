import ErrorIllustration from '../../assets/error.svg'

import {
  Container,
  ErrorWrapper,
  ErrorTitle,
  ErrorSubtitle,
  Illustration,
  Redirect,
} from './style'

function Error() {
  return (
    <Container>
      <ErrorWrapper>
        <ErrorTitle>OUPS...</ErrorTitle>
        <Illustration src={ErrorIllustration} />
        <ErrorSubtitle>
          Il semblerait que la page que vous cherchez n’existe pas
        </ErrorSubtitle>
        <Redirect to="/" $isFullLink>
          Accueil
        </Redirect>
      </ErrorWrapper>
    </Container>
  )
}

export default Error
