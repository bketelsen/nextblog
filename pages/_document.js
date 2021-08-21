import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" data-theme="light">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="blue" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-title" content="Brian Ketelsen" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <meta name="msapplication-navbutton-color" content="blue" />
          <meta name="msapplication-TileColor" content="red" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />

          <meta name="application-name" content="Brian Ketelsen" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />
          <meta name="msapplication-starturl" content="/" />

          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />

          <meta name="nightmode" content="enable/disable" />

          <meta name="layoutmode" content="fitscreen/standard" />

          <meta name="imagemode" content="force" />

          <meta name="screen-orientation" content="portrait" />

          <link href="/icons/icon-72x72.png" rel="icon" type="image/png" sizes="72x72" />
          <link href="/icons/icon-96x96.png" rel="icon" type="image/png" sizes="96x96" />
          <link href="/icons/icon-128x128.png" rel="icon" type="image/png" sizes="128x128" />
          <link href="/icons/icon-144x144.png" rel="icon" type="image/png" sizes="144x144" />
          <link href="/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />

          <link href="/icons/icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body className="antialiased text-base-content bg-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
