import "../src/app/globals.css";
import Head from "next/head";
import Layout from "../src/app/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          href="/favicon-dark.png"
          media="(prefers-color-scheme: light)"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-light.png"
          media="(prefers-color-scheme: dark)"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
