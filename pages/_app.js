import '@/styles/globals.css'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Layout>
        <SEO title={process.env.siteTitle} />

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
