import Head from "next/head";
import Script from "next/script";

export const Meta = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-tag">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>Loo Purity Test</title>
        <meta name="title" content="Loo Purity Test" />
        <meta
          name="description"
          content="Hi disciple of Mr. Goose, how pure are you? take this test to find out."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content="Loo Purity Test" />
        <meta
          name="og:description"
          content="Hi disciple of Mr. Goose, how pure are you? take this test to find out."
        />
      </Head>
    </>
  );
};
