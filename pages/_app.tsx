import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:site_name" content="Coder2195's Website" />
      <meta property="og:url" content={`https://coder2195.vercel.app${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://coder2195.vercel.app/apple-touch-icon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
