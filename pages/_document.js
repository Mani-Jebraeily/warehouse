import { Html, Head, Main, NextScript } from "next/document";
import GitHub from "../components/gitHub";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className="antialiased">
        <GitHub/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
