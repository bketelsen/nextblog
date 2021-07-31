/* eslint-disable react/display-name */
import '@/css/tailwind.css'

import CustomLink from '@/components/Link'
import Head from 'next/head'
import Image from '@/components/Image'
import LayoutWrapper from '@/components/LayoutWrapper'
import { MDXProvider } from '@mdx-js/react'
import Pre from '@/components/Pre'
import { ThemeProvider } from 'next-themes'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
