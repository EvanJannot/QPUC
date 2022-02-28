import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const LeaderboardWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`

export const PageTitle = styled.div`
  display: flex;
  width: 32%;
  height: 10%;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  font-size: 40px;
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  background: linear-gradient(180deg, #f2a616 0%, #fee301 100%);
`

export const Table = styled.div`
  height: 80%;
  width: 85%;
  border: 5px solid #000000;
  font-size: 28px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #caddee 0%, #ffffff 100%);
`

export const Row = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: 9.2%;
  width: 100%;
  margin-left: -5px;
  margin-top: -5px;
  border: 5px solid #000000;
`
export const LastRow = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: 9.2%;
  width: 100%;
`
