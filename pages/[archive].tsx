import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react';

import { albumArchives, ArchiveInterface, getPosts, PostInterface, PostMetaInterface } from '../lib/posts';
import { Masthead, Subhead, Text } from '../components';

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.archive) {
    return {
      notFound: true,
    };
  }

  const archiveName = (context.params.archive instanceof Array)
    ? context.params.archive[0]
    : context.params.archive;

  const archive = albumArchives.find(a => a.slug === archiveName);

  if (!archive) {
    return { notFound: true, };
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
    paths: albumArchives.map(a => {
      return { params: { archive: a.slug } }
    }),
    fallback: false,
  };
};

interface IndexInterface {
  archive: ArchiveInterface,
  posts: PostInterface[] | undefined,
};

const IndexPage: NextPage<IndexInterface> = ({ archive, posts }) => {
  return (
    <main>
      <Masthead title={archive.title}>
        <Subhead>Taylor Smith</Subhead>
      </Masthead>
      <Text>
        {posts?.map(post => (<li key={post.slug}><a href={post.url}>{post.data.title}</a></li>))}
      </Text>
    </main>
  )
};

export default IndexPage;
