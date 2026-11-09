import "../src/app/globals.css";
import Head from "next/head";
import { useContent } from "../src/app/i18n/content";
import {
  alternatePath,
  cleanPath,
  localeForPath,
} from "../src/app/i18n/locale";

const SITE_URL = "https://chrisand.design";
const absolute = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

function MyApp({ Component, pageProps, router }) {
  const { global } = useContent();
  const pathname = cleanPath(router.asPath);
  const alternate = alternatePath(pathname);
  const locale = localeForPath(pathname);

  return (
    <>
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
        <title key="title">{global.siteMetadata.title}</title>
        <meta key="robots" name="robots" content="all" />
        <meta
          key="description"
          name="description"
          content={global.siteMetadata.description}
        />
        <meta name="keywords" content={global.siteMetadata.keywords} />
        <meta name="author" content={global.siteMetadata.author} />

        <meta
          key="og:title"
          property="og:title"
          content={global.siteMetadata.title}
        />
        <meta
          key="og:description"
          property="og:description"
          content={global.siteMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`${SITE_URL}/og-${locale === "pl" ? "pl" : "en"}.jpg`}
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:image:alt" content={global.siteMetadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta key="og:url" property="og:url" content={absolute(pathname)} />
        {alternate && <link rel="canonical" href={absolute(pathname)} />}
        {alternate && (
          <link rel="alternate" hrefLang={locale} href={absolute(pathname)} />
        )}
        {alternate && (
          <link
            rel="alternate"
            hrefLang={locale === "pl" ? "en" : "pl"}
            href={absolute(alternate)}
          />
        )}
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
