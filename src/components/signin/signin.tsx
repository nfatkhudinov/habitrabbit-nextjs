import React, {useState} from 'react';
import {Alert, Box, ButtonGroup, Card, CardActions, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import logo from './logo.png'
import {Button} from "@mui/material";
import {signIn} from "next-auth/react";
import {Router} from "next/router";
import {useRouter} from "next/navigation";

const Signin = () => {
    const router = useRouter()
    const [loginForm, setloginForm] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);
    const emailHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setloginForm({...loginForm, email: e.target.value})
    }
    const passwordHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setloginForm({...loginForm, password: e.target.value})
    }
    const submitLoginFormHandler = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: loginForm.email,
                password: loginForm.password
            })
            if (res?.error) {
                setError(true)
            } else setError(false)
        } catch (e) {
            console.log(e)
        }
    }


    const showError = ()=>{
        return (error)? <Alert severity="error">Неправильный e-mail или пароль</Alert>:'';
    }


    return (
        <Card sx={{ maxWidth: 330 }} variant="outlined">
            <CardContent>
                <Typography variant={"h6"}>Вход</Typography>
                {showError()}
                <TextField error={error} onChange={emailHandler} id="standard-basic" label="E-mail" variant="standard" fullWidth size={"small"} margin={"none"}/>
                <TextField error={error} onChange={passwordHandler} id="standard-basic" type={"password"} label="Пароль" variant="standard" fullWidth size={"small"}/>
            </CardContent>
            <CardActions>
                <Button onClick={(e)=>submitLoginFormHandler(e)} color="primary" variant={"contained"} disableElevation fullWidth>
                    Войти
                </Button>
            </CardActions>
            <CardActions>
                <Button onClick={()=>router.push('/registration')} color="success" variant={"contained"} disableElevation fullWidth>
                    Регистрация
                </Button>
            </CardActions>
</Card>
    );
};

export default Signin;