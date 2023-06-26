import styled from "styled-components";
import imageCheck from './check.svg'
import imageClose from '../allHabits/AddButton/close.svg'

export const Container = styled.div`
  background-color: #EDF7ED;
  border-radius: 20px;
  padding: 0 10px 0 10px;
  color: #386A20;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  justify-content: space-between;
  position: relative;
  width: 400px;
`

export const Image = styled.div`
background-image: url('${imageCheck.src}');
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 10px 0;
`

export const Close = styled.button`
background-image: url('${imageClose.src}');
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  background-color: #EDF7ED;
  &:hover{
    color: #D74141;
    transition: color 0.3s;
  }
`


export const CloseTip = styled.button`
  position: absolute;
  z-index: 9;
  width: 100px;
  height: 30px;
  left: 450px;
  animation: 0.1s show ease;
  @keyframes show {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  &:hover{
    color: #D74141;
    transition: color 0.3s;
  }
`