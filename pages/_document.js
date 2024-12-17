import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us">
        <Head>
          <meta name="description" content="Rafinhaa, te amoo!!" />
          <meta name="keywords" content="amor, love, coração, ouro" />
          <meta name="author" content="Christopher Mendes" />
          <meta property="og:title" content="Rafinhaa, te amoo!!" />
          <meta
            property="og:description"
            content="Expressando amor com corações."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://clone-tabnews-eta-orpin.vercel.app"
          />
          <meta
            property="og:image"
            content="https://clone-tabnews-eta-orpin.vercel.app/favicon-96x96.png"
          />

          <link
            rel="icon"
            type="image/png"
            href="https://clone-tabnews-eta-orpin.vercel.app/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://clone-tabnews-eta-orpin.vercel.app/favicon.svg"
          />
          <link
            rel="shortcut icon"
            href="https://clone-tabnews-eta-orpin.vercel.app/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://clone-tabnews-eta-orpin.vercel.app/apple-touch-icon.png"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Rafinhaa, te amoo!!"
          />
          <link
            rel="manifest"
            href="https://clone-tabnews-eta-orpin.vercel.app/site.webmanifest"
          />

          <title>Rafinhaa, te amoo!!</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
