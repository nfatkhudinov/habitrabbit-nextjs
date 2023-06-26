import styled from "styled-components";

export const Container = styled.div`
display: flex;
  flex-direction: row;
width: 700px;
  height: 100vh;
  gap: 30px;
`
export const MenuContainer = styled.div`
width: 30px;
  height: 500px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ContentContainer = styled.div`
  background: linear-gradient(180deg, #2E9699 0%, #F6DB68 93.23%);
  width: 800px;
  padding: 10px 20px 0 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const HeaderText = styled.h1`
  font-weight: bold;
  font-size: 20pt;
`