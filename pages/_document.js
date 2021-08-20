import Document, { Head, Html, Main, NextScript } from 'next/document'
import { GoogleFonts } from 'nextjs-google-fonts/GoogleFonts'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" data-theme="light">
        <Head>{GoogleFonts()}</Head>
        <body className="antialiased text-base-content bg-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
