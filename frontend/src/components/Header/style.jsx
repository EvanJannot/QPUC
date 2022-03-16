import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 10%;
  padding-top: 15px;
  background: #1f2869;
  padding-bottom: 10px;
`

export const DisconnectButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-family: 'Changa One', 'sans-serif';
  margin-right: 30px;
  font-size: 16px;
  background: #f2a616;
  width: 65px;
  height: 65px;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 100px;
`
export const Illustration = styled.img`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const Icon = styled.img`
  width: 70%;
  height: 70%;
`
