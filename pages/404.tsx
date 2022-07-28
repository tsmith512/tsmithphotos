import type { NextPage } from 'next';
import Head from 'next/head';

import { Banner, Subhead, Text, BackButton } from '../components';

const ErrorNotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 | Taylor Smith</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <Banner filename="Adventures - NM/DSC_6326.jpg" fullscreen>
          <h1>404</h1>
          <Subhead>Not found. Or perhaps lost along the way.</Subhead>
        </Banner>
      </main>
    </div>
  );
};

export const config = {
  unstable_runtimeJS: false
};

export default ErrorNotFound;
