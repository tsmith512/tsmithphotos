import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getPostMeta, getPosts, PostInterface, PostMetaInterface } from '../lib/posts';
import { Album, Gallery, Photo, Story, Text, Subhead, Masthead } from '../components';
import Head from 'next/head';

const AllowedComponents = { Gallery, Photo, Story, Text, Subhead, Masthead };

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.slug) {
    return { notFound: true };
  }

  const slug =
    context.params.slug instanceof Array ? context.params.slug[0] : context.params.slug;

  // @TODO: That's a file extension requirement that may not be necessary.
  const post = getPostMeta(`${slug}.mdx`);

  return {
    props: {
      post,
      content: await serialize(post.content),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();

  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// @TODO: Make better.
interface AlbumPageInterface {
  post: PostInterface;
  content: any;
}

const AlbumPage: NextPage<AlbumPageInterface> = ({ post, content }) => {
  return (
    <>
      <Head>
        <title>{post.data.title} | Taylor Smith</title>
        <meta name="description" content="" />
      </Head>

      <Album post={post}>
        <MDXRemote
          components={AllowedComponents}
          {...content}
          scope={{ scope: 'test' }}
        />
      </Album>
    </>
  );
};

export default AlbumPage;
