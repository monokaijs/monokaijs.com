import React from "react";
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import AppLayout from "../layouts/AppLayout";
import {NextUIProvider} from "@nextui-org/react";
import {darkTheme} from "../configs/theme.config";

export default function App({Component, pageProps}: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </NextUIProvider>
  )
}
