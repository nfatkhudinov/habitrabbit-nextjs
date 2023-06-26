import styled from "styled-components";
import ImageIcon from './settingsIcon.svg'
export const Container = styled.div`
background: white;
color: #343434;
  padding: 15px 45px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Header = styled.h4`
  font-weight: bold;
  font-size: 18px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Settings = styled.div`
  width: 15px;
  height: 15px;
  background-image: url('${ImageIcon.src}');
  background-size: contain;
`
export const LengthContainer = styled.div`
margin: 0 -25px;
display: flex;
flex-direction: row;
justify-content: space-between;
  gap: 20px;
  align-items: center;
`

export const StartDateContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  font-size: 12px;
`
export const EndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  font-size: 12px;
`
export const DatesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 7px;
  
`
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #343434;
`
export const DotCompleted = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: darkgreen;
`

export const habitIdStyle = styled.div`
font-size: 8pt;
  color: grey;
`
