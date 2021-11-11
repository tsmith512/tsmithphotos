import type { NextPage } from 'next';
import Head from 'next/head';

import { Banner, Gallery, Photo } from '../components';

const StyleGuide: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Style Guide</title>
        <meta name="description" content="Component Library" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner>
          <h1>Banner</h1>
          <p>
            Banner Element is a full-width, full-height split container with
            text content and a single image that covers the second half.
          </p>
        </Banner>

        <h1>Gallery</h1>
        <Gallery>
          <p>Gallery Caption</p>
        </Gallery>

        <Photo>
          <p>Photo Caption</p>
        </Photo>
      </main>
    </div>
  );
}

export default StyleGuide;
