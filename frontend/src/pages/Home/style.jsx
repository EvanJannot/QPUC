import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${colors.linearBlue};
  font-family: 'Changa One', 'sans-serif';
`
export const Illustration = styled.img`
  align-self: center;
  max-width: 45%;
  max-height: 45%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;

  width: 40%;
  height: 50%;
  background: ${colors.linearWhite};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
  box-shadow: 12px 12px 14px 6px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  height: 10%;
  width: 60%;
  background: ${colors.lightBlue};
  border: 1px solid #000000;
  padding-left: 15px;
  box-shadow: 6px 5px 8px 3px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 25px;
`

export const LoginButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'Changa One', 'sans-serif';
  box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.25);

  background: ${colors.yellow};
  width: 20%;
  height: 33%;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100%;
  cursor: pointer;
`
export const RegisterButton = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  background: ${colors.orange};
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 35px;
`
