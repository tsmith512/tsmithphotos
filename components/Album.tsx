import React from 'react';
import Head from 'next/head';

import { ReactElement } from 'react';

import { BackButton, Banner, Date, PhotoSwipeInitializer, Subhead } from './index';

import { PostInterface } from '../lib/posts';

interface AlbumProps {
  post: PostInterface;
}

export const Album: React.FC<AlbumProps> = ({ post, children }): ReactElement => {
  return (
    <main>
      <Head>
        <title>{post.data.title} | Taylor Smith</title>
      </Head>

      <Banner filename={post.data.image}>
        <h1>{post.data.title}</h1>
        {post.data.date && <Date>{post.data.date}</Date>}
        {post.data.subhead && <Subhead>{post.data.subhead}</Subhead>}
        {post.data.intro && <p>{post.data.intro}</p>}
      </Banner>

      {children}

      <PhotoSwipeInitializer />
    </main>
  );
};
