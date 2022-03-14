import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
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
  align-self: center;
  align-items: center;
  justify-content: center;

  width: 40%;
  height: 50%;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: #caddee;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'Changa One', 'sans-serif';

  background: #fee301;
  width: 100px;
  height: 100px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
`
export const RegisterButton = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  background: #f2a616;
  width: 200px;
  height: 50px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`
