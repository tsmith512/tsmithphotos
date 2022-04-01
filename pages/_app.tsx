import React from 'react';
import Head from 'next/head';

import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Header, Footer } from '../components';

function TSmithPhotos({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6795652/6779432/css/fonts.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default TSmithPhotos;
