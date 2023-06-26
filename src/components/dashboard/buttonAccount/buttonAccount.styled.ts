import Link from "next/link";
import styled from "styled-components";
import iconAccount from './iconAccount.svg'
import iconSettings from './iconSettings.svg'
import iconLogout from './iconLogout.svg'


export const IconAccount = styled.button`
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  background-image: url('${iconAccount.src}');
  &:hover{
    scale: 1.1;
    transition: scale 0.1s;
  }
`

export const Tooltip = styled.button`
  position: absolute;
  z-index: 9;
  width: 100px;
  height: 30px;
  left: -110px;
  background-color: #EDF7ED;
  
  
  border-radius: 35px;
  animation: 0.1s show ease;
  @keyframes show {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`


export const Container = styled.button`
  background-repeat: no-repeat;
  display: block;
  position: relative;
`
export const IconSettings = styled.button`
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  background-image: url('${iconSettings.src}');
  &:hover{
    scale: 1.1;
    transition: scale 0.1s;
  }
`
export const IconLogout = styled.button`
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  background-image: url('${iconLogout.src}');
  &:hover{
    scale: 1.1;
    transition: scale 0.1s;
  }
`