import React, {FormEventHandler, useEffect, useState} from 'react';
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import { Formik, Field, Form } from 'formik';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Button} from "@mui/base";
import Signin from "@/components/signin/signin";
import Info from "@/components/info/info"
import LoginPage from "@/components/LoginPage/loginPage";

const Login = () => {
    //States
    const {data:session} = useSession()
    const router = useRouter()

    //Redirect to homepage if session started

    useEffect(()=>{
        if (session) router.push('/')
    })


    return (
        <LoginPage/>
    );
};

export default Login;