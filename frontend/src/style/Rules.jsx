import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RulesWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 82%;
  background: linear-gradient(180deg, #ffffff 0%, #caddee 100%);
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  margin-left:30px;
  margin-right:30px;
  margin-top:30px;
  }
`

export const PlayButton = styled(Link)`
  display: flex;
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: 'Changa One', 'sans-serif';

  background: #fee301;
  border: 2px solid #000000;
`
