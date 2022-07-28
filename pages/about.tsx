import type { NextPage } from 'next';
import Head from 'next/head';

import { Banner, Subhead, Text, BackButton } from '../components';

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Taylor Smith</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <Banner fullscreen filename="Adventures - West Texas/DSC_8253.jpg">
          <h1>About</h1>
        </Banner>
        <Text>
          <p>
            In 2002, I talked my dad into registering my first ever domain name,
            tsmithphotos.com. I used it both to fiddle with web development and post up my
            photography hobby, the former ended up being my early career. In college, I
            switched over to my{' '}
            <a href="https://tsmith.com/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos">
              design portfolio and blog
            </a>
            , but I didn't want to let this domain or the site go. It's been a
            few different things, built in a few different ways over the years,
            with increasing quality and decreasing critical security
            vulnerability. (I was 14 when I started 🙃.)
          </p>

          <p><strong>Changelog:</strong></p>

          <ol>
            <li>Static site with Dreamweaver Templates, which may or may not have ever made it to the public Internet, I'm not sure</li>
            <li>PERL gallery auto-generated with directory lists from <code>system()</code> calls served off the computer in my bedroom</li>
            <li>PHP gallery auto-generated from text files, served from a sketchy shared hosting provider</li>
            <li>A combinaiton of Flash indexes and PHP gallery pages</li>
            <li>A Flash index and Flash-based image viewer. And &mdash; for the first time &mdash; I included graphic design and web development</li>
            <li>A gaudy Under Construction page that lasted long enough to grow weeds as my attention focused on my professional portfolio</li>
            <li>A Jekyll static site built from Lightroom dated folders (<a href="https://tsmith.com/blog/2016/lightroom-and-jekyll-photoblog/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos">which I explained on my blog</a>), served out of AWS S3 and CloudFront</li>
            <li>An Adobe Portfolio site built with Lightroom and their online WYSIWYG page builder &mdash; the first time I curated by theme instead of date and had a way to add written content</li>
            <li>This Next.js static site built from Lightroom Collections, hosted on Cloudflare Pages and R2 Storage.</li>
          </ol>

          <p>
            As with version 7 (Jekyll), this will likely be a model to rebuild
            my main website, too, if I ever get around to it.
          </p>
        </Text>
      </main>
    </div>
  );
};

export const config = {
  unstable_runtimeJS: false
};

export default AboutPage;
