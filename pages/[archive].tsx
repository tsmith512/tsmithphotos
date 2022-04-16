import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react';

import {
  albumArchives,
  ArchiveInterface,
  getPosts,
  PostInterface,
  PostMetaInterface,
} from '../lib/posts';
import { Masthead, PostIndex, Subhead, Text } from '../components';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.archive) {
    return {
      notFound: true,
    };
  }

  const archiveName =
    context.params.archive instanceof Array
      ? context.params.archive[0]
      : context.params.archive;

  const archive = albumArchives.find((a) => a.slug === archiveName);

  if (!archive) {
    return { notFound: true };
  }

  return {
    props: {
      archive,
      posts: getPosts(archive),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: albumArchives.map((a) => {
      return { params: { archive: a.slug } };
    }),
    fallback: false,
  };
};

interface IndexInterface {
  archive: ArchiveInterface;
  posts: PostInterface[] | undefined;
}

const IndexPage: NextPage<IndexInterface> = ({ archive, posts }) => {
  return (
    <>
      <Head>
        <title>{archive.title} | Taylor Smith</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Masthead title={archive.title}>
          <Subhead>Taylor Smith</Subhead>
        </Masthead>

        {posts?.length && <PostIndex posts={posts} />}
      </main>
    </>
  );
};

export default IndexPage;
