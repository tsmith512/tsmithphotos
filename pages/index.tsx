import React from 'react';

import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getPosts, PostInterface } from '../lib/posts';
import { Masthead, Nav, PostIndex, Subhead } from '../components';

export const getStaticProps: GetStaticProps = async (context) => {
  const allAlbums = getPosts();

  return {
    props: {
      posts: allAlbums,
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
        {posts?.length && <PostIndex posts={posts} />}
      </main>
    </div>
  );
};

export default Home;
