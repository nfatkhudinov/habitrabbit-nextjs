import React, {useState} from 'react';
import * as S from './alert.styled'
const Alert = () => {
    const [showTip, setShowTip] = useState(false)
    const [showAlertMessage, setShowAlertMessage] = useState(true)
    const tipShower = () =>{
        return showTip? <S.CloseTip>Закрыть</S.CloseTip>:''
    }
    if (showAlertMessage) return (
        <S.Container>
            <S.Image/>
            За вчера все задачи выполнены. Так держать!
            {tipShower()}
            <S.Close onClick={()=>setShowAlertMessage(false)} onMouseOver={()=>setShowTip(true)} onMouseOut={()=>setShowTip(false)}/>
        </S.Container>
    ); else return ''
};

export default Alert;