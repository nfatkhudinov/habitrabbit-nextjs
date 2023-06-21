import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "@/lib/axios";

export const authOptions:NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const {email, password} = credentials as any
                const res = await axios.post('/api/login', {
                    email: email,
                    password: password,
                }).catch((e)=>console.log(e))
                if(res?.data.userId){
                    return {
                        email: email,
                        id: res.data.userId,
                        refreshToken: res.data.refreshToken,
                        accessToken: res.data.accessToken,
                    }
                } else return null;
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        )
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn:'/login'
    },
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger==='update'){
                return {...token, ...session.user}
            }
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token as any;
            return session;
        },
    },
}
export default NextAuth(authOptions)