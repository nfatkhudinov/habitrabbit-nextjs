import styled from "styled-components";
import IconImage from './icon.svg'
import Modal from "react-modal";
import closePic from './close.svg'
export const Button = styled.button`
width: 158px;
  height: 30px;
  border-radius: 7px;
  background-color: #386A20;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  &:hover{
    transition: scale 0.1s;
  }
`

export const Icon = styled.div`
background-image: url('${IconImage.src}');
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
  height: 15px;
`

export const ModalContainer = styled(Modal)`
    position: absolute;
    top: 30%;
    left: 30%;
    right: 30%;
    bottom: 30%;
    background-color: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 4px 4px 23px 0px rgba(34, 60, 80, 0.2);
`

export const CloseModalButton = styled.button`
  width:25px;
  height: 25px;
  background-image: url('${closePic.src}');
  background-size: contain;
  &:hover{
    cursor: pointer;
  }
`
export const HeaderOfModal = styled.h2`
  font-weight: bold;
  font-size: 22px;
  color: #343434;
`
export const HeaderOfModalContainer = styled.h2`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`