import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getPosts, PostInterface } from '../lib/posts';
import { Masthead, Nav, PostIndex, Subhead } from '../components';

export const getStaticProps: GetStaticProps = async (context) => {
  const allAlbums = getPosts();

  // @TODO: This is an allowList. If a post slug isn't listed here, it won't be
  // in the index. That's fine for now, but I should probably have a fallback.
  const preferredOrder = [
    'west-texas',
    'climbing',
    'austin-covid-shutdown',
    'austin-to-alaska',
    'ozarks-road-test',
    'colorado',
    'oklahoma-adventure-trail',
    'overland-in-the-southwest',
    'new-mexico',
    'the-pacific-coast-highway',
    'theatre',
    'new-york-city',
    'a-night-in-intercontinental',
    'pets',
  ];

  return {
    props: {
      posts: preferredOrder.map(slug => allAlbums.find(album => album.slug == slug)),
    },
  };
};

interface AllAlbumsInterface {
  posts: PostInterface[];
}

const Home: NextPage<AllAlbumsInterface> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Photography | Taylor Smith</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Masthead title="Taylor Smith">
          <Subhead>A simple photo blog.</Subhead>
          <Nav />
        </Masthead>
        {posts?.length && posts.map((post) => <PostIndex key={post.slug} post={post} />)}
      </main>
    </div>
  );
};

export default Home;
