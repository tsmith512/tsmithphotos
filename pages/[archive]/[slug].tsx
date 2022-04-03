import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import {
  albumArchives,
  ArchiveInterface,
  getPostMeta,
  getPosts,
  PostInterface,
  PostMetaInterface,
} from '../../lib/posts';
import { Album, Gallery, Photo, Story, Text, Subhead, Masthead } from '../../components';

const AllowedComponents = { Gallery, Photo, Story, Text, Subhead, Masthead };

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.archive || !context.params?.slug) {
    return { notFound: true };
  }

  const archiveName =
    context.params.archive instanceof Array
      ? context.params.archive[0]
      : context.params.archive;

  const archive = albumArchives.find((a) => a.slug === archiveName);

  if (!archive) {
    return { notFound: true };
  }

  const slug =
    context.params.slug instanceof Array ? context.params.slug[0] : context.params.slug;

  // @TODO: That's a file extension requirement that may not be necessary.
  const post = getPostMeta(archive, `${slug}.mdx`);

  return {
    props: {
      post,
      archive,
      content: await serialize(post.content),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = albumArchives.map((archive) => getPosts(archive)).flat();

  const paths = posts.map((post) => {
    return {
      params: {
        archive: post.archive.slug,
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
  archive: ArchiveInterface;
  content: any;
}

const AlbumPage: NextPage<AlbumPageInterface> = ({ post, archive, content }) => {
  return (
    <Album post={post} archive={archive}>
      <MDXRemote components={AllowedComponents} {...content} scope={{ scope: 'test' }} />
    </Album>
  );
};

export default AlbumPage;
