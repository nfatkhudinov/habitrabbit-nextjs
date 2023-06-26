import styled from "styled-components";

export const Container = styled.div`
background: white;
color: #343434;
  padding: 15px 45px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const HeaderContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const Header = styled.h3`
font-weight: bold;
  font-size: 18px;
`

export const CompleteMessage = styled.h3`
  font-size: 14px;
  color: darkgreen;
`

export const HorizontalContainer = styled.div`
display: flex;
flex-direction: row;
  gap: 40px;
`