import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Banner,
  Gallery,
  Photo,
  PhotoSwipeInitializer,
  Subhead,
  Text
} from '../components';

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
        <Banner filename="Adventures - IAH/DSC_9070.jpg">
          <h1>Banner</h1>
          <p>
            Banner Element is a full-width, full-height split container with
            text content and a single image that covers the second half.
          </p>
        </Banner>

        <h1>Gallery</h1>
        <Gallery filenames={[
          'Adventures - IAH/DSC_8926.jpg',
          'Adventures - IAH/DSC_8927.jpg',
          'Adventures - IAH/DSC_8946.jpg',
          'Adventures - IAH/DSC_8973.jpg',
          'Adventures - IAH/DSC_8976.jpg',
          'Adventures - IAH/DSC_8984.jpg',
          'Adventures - IAH/DSC_8990.jpg',
          'Adventures - IAH/DSC_9001.jpg',
          'Adventures - IAH/DSC_9009.jpg',
          'Adventures - IAH/DSC_9024.jpg',
          'Adventures - IAH/DSC_9070.jpg',
          'Adventures - IAH/DSC_9094.jpg',
        ]}>
          <p>Gallery Caption</p>
        </Gallery>

        <h1>Text</h1>
        <Text>
          <h1>Heading 1</h1>
          <Subhead>Subhead diam tempor luctus nec nec metus.</Subhead>
          <p><em>Nam nisi erat, euismod non eleifend eu,</em> venenatis sed arcu. Etiam mi quam, fringilla iaculis aliquam ut, porta quis nunc. Pellentesque mattis sem sed feugiat ultricies. Ut ut lorem vel risus interdum rutrum. Nulla ut mollis ligula. Integer vel elementum neque, sed pretium dui. Morbi ac nulla et sapien tincidunt luctus ac ut urna. Etiam nec arcu id tellus hendrerit dapibus a at metus.</p>
          <h2>Heading 2</h2>
          <p><strong>Aliquam at euismod tellus</strong>. Etiam euismod vehicula justo, a consectetur quam pellentesque eu. Vestibulum hendrerit nec odio rutrum mollis. Quisque faucibus tellus vel tempus elementum. Cras at mi eget lectus congue sagittis id non erat. Sed viverra leo id lacus rutrum, eu elementum felis rhoncus. Aenean ac lectus id felis aliquam tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla libero ligula, mattis ac sagittis vitae, lacinia a leo. Vestibulum sed venenatis est. Proin id faucibus ligula.</p>
          <h3>Heading 3</h3>
          <p><a href="#">Vestibulum accumsan eu nisl nec condimentum</a>. Curabitur rhoncus rhoncus sem tristique egestas. Donec lobortis, diam ac consequat bibendum, magna tellus luctus tortor, id tincidunt velit ante tincidunt leo. Phasellus ac lacus orci. In dapibus viverra justo. Duis feugiat nulla non auctor porta. Pellentesque pellentesque risus in tempor consequat.</p>
        </Text>

        <h1>Single Photo</h1>
        <Photo filename="Adventures - IAH/DSC_9152.jpg">
          <p>Photo Caption</p>
        </Photo>
      </main>

      <PhotoSwipeInitializer />
    </div>
  );
}

export default StyleGuide;
