import '../styles/global.scss';
import type { AppProps } from 'next/app';
import { Header, Footer } from '../components';

function TSmithPhotos({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default TSmithPhotos;
