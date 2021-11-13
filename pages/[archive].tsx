import fs from 'fs';
import { join } from 'path';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { Masthead, Subhead } from '../components';

const albumDirectory = join(process.cwd(), '_posts');

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.archive) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      archive: context.params.archive,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { archive: 'adventures', }, },
      { params: { archive: 'hobbies', }, },
    ],
    fallback: false,
  };
};

interface IndexInterface {
  archive: string,
};

const IndexPage: NextPage<IndexInterface> = ({ archive }) => {
  return (
    <Masthead title={archive}>
      <Subhead>Taylor Smith</Subhead>
    </Masthead>
  )
};

export default IndexPage;
