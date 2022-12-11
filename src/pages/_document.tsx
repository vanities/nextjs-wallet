import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Header" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
