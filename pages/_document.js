import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" data-theme="cupcake">
        <Head />
        <body className="antialiased text-base-content bg-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
