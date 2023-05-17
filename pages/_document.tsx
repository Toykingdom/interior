import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Ellana Stander Arch Design Based in Cape Town."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Ellana Stander Arch Design Based in Cape Town.."
          />
          <meta property="og:title" content="Ellana Stander Arch Design Based in Cape Town." />
          <meta name="twitter:card" content="Ellana Stander Arch Design Based in Cape Town." />
          <meta name="twitter:title" content="Ellana Stander Arch Design Based in Cape Town." />
          <meta
            name="twitter:description"
            content="Ellana Stander Arch Design Based in Cape Town.."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
