import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";

import '../styles/global.scss';
import { Header, Footer } from '../components';

function TSmithPhotos({ Component, pageProps }: AppProps) {
  // @TODO: This will cause problems if I start using query args or fragments.
  const canonincalURL = process.env.NEXT_PUBLIC_SITE_DOMAIN + useRouter().asPath;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/6795652/6779432/css/fonts.css"
        />

        <meta name='viewport' content='width=device-width' />

        <link rel='canonical'       href={canonincalURL} />
        <meta property='og:url'  content={canonincalURL} />
        <meta name='twitter:url' content={canonincalURL} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default TSmithPhotos;
