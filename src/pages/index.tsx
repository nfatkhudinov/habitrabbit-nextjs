import Head from 'next/head'
import {signIn, signOut, useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {stat} from "fs";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import axios from "@/lib/axios";
import Dashboard from "@/components/dashboard/dashboard";

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const axiosAuth = useAxiosAuth()

  const getUserData = async () => {
    const res = await axiosAuth.post('/api/user/getCurrentUserInfo').then((res)=>console.log(res.data))
        .catch((e)=>console.log(e))
  }

  useEffect(()=> {
      if (status==='unauthenticated') router.push('/login')
  }, [status])

    if (status==='loading') return <>Loading...</>

    if (status==='authenticated'){

      const logoutWithRequest = async ()=>{
        await axiosAuth.post('/api/logout', {
          refreshToken: session?.user.refreshToken
        })
            .then(()=>signOut()
            .catch((e)=>console.log(e)))

      }


    return(
      <>
        <Dashboard/>
      </>

  )}

}
