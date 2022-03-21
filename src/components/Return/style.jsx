import styled from 'styled-components'

export const Arrow = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  margin-left: ${({ page }) => (page === '/leaderboard' ? '300px' : '40px')};
  margin-bottom: ${({ page }) => (page === '/leaderboard' ? '0px' : '280px')};
  position: absolute;
  width: 80px;
  height: 60px;
  background: ${({ page }) => (page === '/leaderboard' ? 'white' : '#CADDEE')};
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 6px 5px 5px rgba(0, 0, 0, 0.25);
`
export const Illustration = styled.img`
  display: flex;
  align-self: center;
`
