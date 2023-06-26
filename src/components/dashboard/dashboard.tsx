import React, {useEffect, useState} from 'react';
import * as S from './dashboard.styled'
import Layout from "@/components/Layout/layout";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {axiosAuth} from "@/lib/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {signOut, useSession} from "next-auth/react";
import moment from "moment";
import TodayHabits from "@/components/todayHabits/todayHabits";
import ButtonAccount from "@/components/dashboard/buttonAccount/buttonAccount";
import Alert from "@/components/alert/alert";
import DownloadWallpaper from "@/components/downloadWallpaper/downloadWallpaper";
import AllHabits from "@/components/allHabits/allHabits";
const Dashboard = () => {
    const [userName, setUserName] = useState('')
    const axiosAuth = useAxiosAuth()
    const { data: session, status } = useSession()
    const getUserData = async () => {
        const res = await axiosAuth.post('/api/user/getCurrentUserInfo').then((res)=>setUserName(res.data.email))
            .catch((e)=>console.log(e))
    }

    const logoutWithRequest = async ()=>{

        await axiosAuth.post('/api/logout', {
            // @ts-ignore
            refreshToken: session?.user.refreshToken
        })
            .then(()=>signOut()
                .catch((e)=>console.log(e)))

    }

    useEffect(()=>{
        getUserData().catch(e=>console.log(e))
    }, [])

    return (
        <S.Container>
            <S.MenuContainer>
                <ButtonAccount type={'account'}/>
                <ButtonAccount type={'settings'}/>
                <ButtonAccount type={'logout'} onClick={logoutWithRequest}/>
            </S.MenuContainer>
            <S.ContentContainer>
                <S.HeaderText>Добро пожаловать,<br/> {userName}</S.HeaderText>
                <TodayHabits/>
                <DownloadWallpaper/>
                <AllHabits/>
            </S.ContentContainer>
        </S.Container>
    );
};

export default Dashboard;