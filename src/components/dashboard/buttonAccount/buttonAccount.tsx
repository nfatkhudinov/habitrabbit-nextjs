import React, {useState} from 'react';
import Link from "next/link";
import * as S from './buttonAccount.styled'
import {Props} from './buttonAccount.types'

const ButtonAccount:React.FC<Props> = (props) => {
    const [showAccountTip, setShowAccountTip] = useState(false)
    const [showSettingsTip, setShowSettingsTip] = useState(false)
    const [showLogoutTip, setShowLogoutTip] = useState(false)

    const AccountTip = () =>{
        return showAccountTip?<S.Tooltip>Профиль</S.Tooltip>:''
    }

    const SettingsTip = () =>{
        return showSettingsTip?<S.Tooltip>Настройки</S.Tooltip>:''
    }

    const LogoutTip = () =>{
        return showLogoutTip?<S.Tooltip>Выйти</S.Tooltip>:''
    }

    if (props.type==='account') return (
        <S.Container>
            {AccountTip()}
        <S.IconAccount onMouseEnter={()=>setShowAccountTip(true)} onMouseOut={()=>setShowAccountTip(false)} onClick={props.onClick}/>
        </S.Container>
    );

    if (props.type==='settings') return (
        <S.Container>
        {SettingsTip()}
        <S.IconSettings onMouseEnter={()=>setShowSettingsTip(true)} onMouseOut={()=>setShowSettingsTip(false)} onClick={props.onClick}/>
        </S.Container>
    );

    else return (
        <S.Container>
        {LogoutTip()}
        <S.IconLogout onMouseEnter={()=>setShowLogoutTip(true)} onMouseOut={()=>setShowLogoutTip(false)}  onClick={props.onClick}/>
        </S.Container>
    );
};

export default ButtonAccount;