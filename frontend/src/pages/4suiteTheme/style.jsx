import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Suite4Wrapper = styled.div`
  display: flex;
  margin: 0px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 60px;
  -webkit-text-stroke: 2px black;
  font-family: 'Changa One', 'sans-serif';
`

export const Themes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 1200px;
  flex-wrap: wrap;
  font-family: 'Changa One', 'sans-serif';
`