import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WAREHOUSE</title>
        <meta name="description" content="warehouse website" />
        <link rel="icon" href="../public/favicon.ico" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
