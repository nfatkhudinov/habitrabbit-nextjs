import styled from "styled-components";

export const Container = styled.div`
    display: flex;
  width: 100%;
  justify-content: center;
`

export const DownloadLink = styled.div`
    &:hover{
      border-bottom: 1px dashed white;
      cursor: pointer;
      height: 20px;
    }
`