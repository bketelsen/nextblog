import '@/css/tailwind.css'

import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="brian.dev">
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </PlausibleProvider>
  )
}
