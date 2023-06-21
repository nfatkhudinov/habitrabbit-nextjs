import React, {ChangeEvent, useRef, useState} from 'react';
import {Alert, Box, Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {router} from "next/client";
import {useRouter} from "next/navigation";

const Signup = () => {
    const [ErrorMsg, setErrorMsg] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const router = useRouter()


    const submitHandler = async() =>{
        if (repeatedPassword===password) {
            try {
                const res = await axios.post('http://localhost:3001/api/signup', {
                    email: email,
                    password: password,
                })
                console.log(res)
                router.push('/')
            } catch (e) {
                if (e) setErrorMsg(`${e.response.data.message}`)
            }
        } else {
            setErrorMsg('Different passwords')
            setPassword('')
            setRepeatedPassword('')
        }
    }

    const showError = () =>{
        if (ErrorMsg!=='') return <Alert severity="error">{ErrorMsg}</Alert>
    }

    //INPUT HANDLERS

    const emailHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setPassword(e.target.value)
    }
    const repeatedPasswordHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setRepeatedPassword(e.target.value)
    }

    return (
        <Card sx={{ maxWidth: 330 }} variant="outlined">
            <CardContent>
                <Typography variant={"h6"}>Регистрация</Typography>
                {showError()}
                <TextField onChange={(e)=>emailHandler(e)} id="standard-basic" label="E-mail" variant="standard" fullWidth size={"small"} margin={"none"}/>
                <TextField onChange={(e)=>passwordHandler(e)} id="standard-basic" type={"password"} label="Пароль" variant="standard" fullWidth size={"small"}/>
                <TextField onChange={(e)=>repeatedPasswordHandler(e)} id="standard-basic" type={"password"} label="Повторите пароль" variant="standard" fullWidth size={"small"}/>
                <Box marginTop={2}>
                <ReCAPTCHA sitekey="6Lfck7QmAAAAANNqA1f2Oggf3643BpSqhgousen9"/>
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={submitHandler} color="success" variant={"contained"} disableElevation fullWidth>
                    Регистрация
                </Button>
            </CardActions>
        </Card>
    );
};

export default Signup;