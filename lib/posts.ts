import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

export interface ArchiveInterface {
  slug: string;
  title: string;
  root: string;
  sort: string;
}

export interface PostMetaInterface {
  title: string;
  date: string;
  image: string;
  subhead?: string;
  intro?: string;
}

export interface PostInterface {
  slug: string;
  file: string;
  url: string;
  data: PostMetaInterface;
  archive: ArchiveInterface;
  content: string;
}

export const albumArchives: ArchiveInterface[] = [
  {
    slug: 'adventures',
    title: 'Adventures',
    root: join(process.cwd(), '_adventures'),
    sort: 'date',
  },
  {
    slug: 'hobbies',
    title: 'Hobbies',
    root: join(process.cwd(), '_hobbies'),
    sort: 'date',
  },
];

export const getPosts = (archive: ArchiveInterface) => {
  const files = fs.readdirSync(archive.root);

  const posts = files
    .map((file) => getPostMeta(archive, file))
    .sort((p1, p2) => (p1.data.date > p2.data.date ? -1 : 1));

  return posts;
};

export const getPostMeta = (
  archive: ArchiveInterface,
  filename: string
): PostInterface => {
  const slug = filename.replace(/\.mdx?$/, '');
  const postFile = join(archive.root, filename);

  const fileContents = fs.readFileSync(postFile, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug,
    file: postFile,
    url: `/${archive.slug}/${slug}`,
    data: Object.assign(
      {
        // This is to make type validation happy. This whole thing will explode
        // if these three keys aren't in the frontmatter of all posts.
        title: '',
        date: '',
        image: '',
      },
      data
    ),
    archive,
    content,
  };
};
