import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "@/styles/global";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import store from "@/redux/store";
import {Provider} from "react-redux";
//import "rsuite/dist/rsuite.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
      <SessionProvider session={pageProps.session}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <GlobalStyle />
      <Component {...pageProps} />
          </LocalizationProvider>
      </SessionProvider>
      </Provider>
  )
}
