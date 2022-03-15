import styled from 'styled-components'

export const RegisterWrapper = styled.div`
  display: flex;
  ${'' /* position: absolute; */}
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1f2869 0%, #355f9f 48.23%, #50a0d3 100%);
  font-family: 'Changa One', 'sans-serif';
`
export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 55%;
  width: 65%;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 35px;
`

export const Title = styled.div`
  font-family: Alex Brush;
  font-style: normal;
  font-weight: normal;
  font-size: 144px;
  text-align: center;
  color: #fee301;
`
export const RegisterButton = styled.button`
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
export const Input = styled.input`
  height: 40px;
  width: 350px;
  background: #caddee;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
`
