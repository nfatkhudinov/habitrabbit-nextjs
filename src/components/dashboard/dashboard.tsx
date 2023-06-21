import React, {useEffect, useState} from 'react';
import * as S from './dashboard.styled'
import Layout from "@/components/Layout/layout";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {axiosAuth} from "@/lib/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import {signOut, useSession} from "next-auth/react";
import moment from "moment";
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
            refreshToken: session?.user.refreshToken
        })
            .then(()=>signOut()
                .catch((e)=>console.log(e)))

    }

    useEffect(()=>{
        getUserData().catch(e=>console.log(e))
    }, [])

    return (
        <Layout>
        <S.Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Добро пожаловать, {userName}
                        </Typography>
                        <Button onClick={()=>logoutWithRequest()} color="inherit">Выйти</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Сегодня {moment().format('ll')}
            </Typography>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Задачи на сегодня:
            </Typography>
        </S.Container>
        </Layout>
    );
};

export default Dashboard;