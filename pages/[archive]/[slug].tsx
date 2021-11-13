import fs from 'fs';
import { join } from 'path';

import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { Album, Gallery, Photo, Story, Text, Subhead } from '../../components';
const AllowedComponents = { Gallery, Photo, Story, Text, Subhead };

const albumDirectory = join(process.cwd(), '_posts');

const getPostContent = (slug: any) => {
  const postPath = join(albumDirectory, `${slug}.mdx`);

  const file = fs.readFileSync(postPath, 'utf8');

  const { data, content } = matter(file);

  // @TODO: In the tutorial, this process was abstracted into a utility function
  // and only requested frontmatter values were returned to getStaticProps.

  return {
    slug,
    data,
    content,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = (context.params.slug instanceof Array)
    ? context.params.slug[0].replace(/\.mdx?$/, '')
    : context.params.slug.replace(/\.mdx?$/, '');

  const post = getPostContent(slug);

  return {
    props: {
      post: {
        ...post.data,
        content: await serialize(post.content),
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(albumDirectory);
  const posts = filenames
    .map((file) => getPostContent(file.replace(/\.mdx?$/, '')))
    .sort((p1, p2) => (p1.data.date > p2.data.date ? -1 : 1));

  const paths = posts.map((post) => {
    return {
      params: {
        archive: 'adventures',
        slug: post.slug
      },
    }
  });

  return {
    paths,
    fallback: false,
  };
};

// @TODO: Make better.
interface AlbumInterface {
  post: any,
};

const AlbumPage: NextPage<AlbumInterface> = ({ post }) => {
  return (
    <Album
      title={post.title}
      date={post.date}
      image={post.image}
      subhead={post.subhead}
      intro={post.intro}>

      <MDXRemote components={AllowedComponents} {...post.content} />
    </Album>

  );
};

export default AlbumPage;
