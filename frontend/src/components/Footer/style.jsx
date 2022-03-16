import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10%;
  background: #caddee;
  border-top: 4px solid #000000;
`

export const Repository = styled.div`
  font-family: 'Changa One', 'sans-serif';
`

export const Credits = styled.div`
  font-family: 'Changa One', 'sans-serif';
`
export const GitHub = styled(Link)`
  font-family: 'Changa One', 'sans-serif';
`
