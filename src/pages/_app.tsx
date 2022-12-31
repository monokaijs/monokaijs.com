import React, {PropsWithChildren} from "react";
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import AppLayout from "../layouts/AppLayout";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme, lightTheme} from "../configs/theme.config";
import {Provider} from "react-redux";
import {store, useAppSelector} from "../redux/store";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <AppInner {...props}/>
    </Provider>
  )
}

export const AppInner = ({Component, pageProps}: AppProps) => {
  const {theme} = useAppSelector(state => state.theme);
  return (
    <>
      <NextUIProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </NextUIProvider>
    </>
  )
}
