import { Html, Head, Main, NextScript } from "next/document";
import GitHub from "./components/gitHub";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <GitHub/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
