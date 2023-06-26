import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 0 20px 0 20px;
  border-radius: 5px;
  &:hover{
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.1s;
    cursor: pointer;
  }
  &:active{
    scale: 0.98;

  }
`

export const TaskNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
export const TaskName = styled.h3`
  font-size: 14pt;
  font-weight: bold;
`
export const TaskMark = styled.h3`
  font-size: 8pt;
`
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const Dates = styled.h3`
  font-size: 8pt;
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border: 2px solid #343434;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: row;
`
interface Props {
    percent: number
}

export const Progress = styled.div<Pick<Props, 'percent'>>`
  width: ${p => p.percent}%;
  height: 8px;
  background-color: #343434;
`;

export const SuccessIcon = styled.div`
  width: 15px;
  height: 9px;
  border-radius: 5px;
  margin-left: -10px;
  background-color: green;
`
export const AlertIcon = styled.div`
  width: 15px;
  height: 9px;
  border-radius: 5px;
  margin-left: -10px;
  background-color: red;
`



