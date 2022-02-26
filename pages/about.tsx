import type { NextPage } from 'next';
import Head from 'next/head';

import {
  Banner,
  Subhead,
  Text,
} from '../components';

const AboutPage: NextPage = () => {
  return(
    <div>
      <Head>
        <title>About Taylor Smith</title>
        <meta name="description" content="Component Library" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner filename="Adventures - IAH/DSC_9070.jpg">
          <h1>About</h1>
          <Subhead>A simple photo blog from a less simple codebase.</Subhead>
        </Banner>
        <Text>

          <p>In 2002, I talked my dad into registering my first ever domain name,
            tsmithphotos.com. I used it both to fiddle with web development and
            post up my photography hobby, the former ended up being my early
            career. In college, I switched over to my
            <a href="https://tsmith.com/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos">design and development portfolio</a>,
            but I didn't want to let this
            name or the site go. It's been a few different things, built in a
            few different ways over the years.</p>

          <p>First, it was a manually created static site with Dreamweaver. One
            time I built a horribly insecure PHP auto-generated gallery. Then
            there was that Flash gallery that read XML indexes. And most
            recently, a Lightroom-Jekyll-and-JS powered photoblog
            (<a href="https://tsmith.com/blog/2016/lightroom-and-jekyll-photoblog/?utm_source=tsmithphotos&utm_medium=website&utm_campaign=tsmithphotos">
            which I explained on my blog</a>). But each were very "photos by
            date" focused, and didn't allow much in the way of curating and page
            building. Most recently, I used Adobe Portfolio to pull in images
            from Lightroom directly without building anything myself.</p>

          <p>But I'm back to building by hand, this time using Next.js as a
            static site builder, but taking images in categories and page
            building for stories. This will likely be a model to rebuild my main
            website, too, if I ever get around to it.</p>
        </Text>
      </main>
    </div>
  );
}

export default AboutPage;
