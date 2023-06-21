"use client";

import axios from "@/lib/axios";
import {signIn, useSession} from "next-auth/react";

export const useRefreshToken = () => {
    const { data: session, update } = useSession();
    return async () => {
        const res = await axios.post("/api/refresh", {
            // @ts-ignore
            refreshToken: session.user.refreshToken,
        });
        if (session) {
        await update({
               ...session, user:{
                   ...session.user,
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken

            }
        })
            // @ts-ignore
            session.user.accessToken = res.data.accessToken,
             // @ts-ignore
            session.user.refreshToken = res.data.refreshToken
        } else await signIn();
    };
};

