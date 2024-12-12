import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-us">
                <Head>
                    <meta name="description" content="Welcome to the future" />
                    <meta name="keywords" content="future, welcome" />
                    <meta name="author" content="Christopher Mendes" />
                    <meta property="og:title" content="Welcome" />
                    <meta property="og:description" content="Welcome to the future" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://clone-tabnews-eta-orpin.vercel.app" />
                    <meta property="og:image" content="https://clone-tabnews-eta-orpin.vercel.app/favicon-96x96.png" />

                    <link rel="icon" type="image/png" href="https://clone-tabnews-eta-orpin.vercel.app/favicon-96x96.png" sizes="96x96" />
                    <link rel="icon" type="image/svg+xml" href="https://clone-tabnews-eta-orpin.vercel.app/favicon.svg" />
                    <link rel="shortcut icon" href="https://clone-tabnews-eta-orpin.vercel.app/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="https://clone-tabnews-eta-orpin.vercel.app/apple-touch-icon.png" />
                    <meta name="apple-mobile-web-app-title" content="Welcome" />
                    <link rel="manifest" href="https://clone-tabnews-eta-orpin.vercel.app/site.webmanifest" />

                    <title>Welcome</title>
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
