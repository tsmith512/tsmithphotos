import React from 'react';
import Head from 'next/head';

import { ReactElement } from 'react';

import {
  BackButton,
  Banner,
  Date,
  PhotoSwipeInitializer,
  Subhead
} from './index';

import { ArchiveInterface, PostInterface } from '../lib/posts';

interface AlbumProps {
  post: PostInterface,
  archive: ArchiveInterface,
}

export const Album: React.FC<AlbumProps> = ({ post, archive, children }): ReactElement => {

  return (
    <main>
      <Head>
        <title>{post.data.title} | Taylor Smith</title>
      </Head>

      <Banner filename={post.data.image}>
        <BackButton url={'/' + archive.slug}>{archive.title}</BackButton>
        <h1>{post.data.title}</h1>
        {post.data.date && (<Date>{post.data.date}</Date>)}
        {post.data.subhead && (<Subhead>{post.data.subhead}</Subhead>)}
        {post.data.intro && (<p>{post.data.intro}</p>)}
      </Banner>

      {children}

      <PhotoSwipeInitializer />
    </main>
  );
}
