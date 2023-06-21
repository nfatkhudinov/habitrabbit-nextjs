import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
      </SessionProvider>
  )
}
