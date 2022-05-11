import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

export interface PostMetaInterface {
  title: string;
  date?: string;
  image: string;
  subhead?: string;
  intro?: string;
}

export interface PostInterface {
  slug: string;
  file: string;
  url: string;
  data: PostMetaInterface;
  content: string;
}

export const getPosts = () => {
  const files = fs.readdirSync(join(process.cwd(), '_posts'));

  const posts = files
    .map((file) => getPostMeta(file))
    .sort((a, b) => {
      // If one has a date but the other doesn't...
      if (a.data.date && !b.data.date) {
        return -1;
      } else if (!a.data.date && b.data.date) {
        return 1;
      }

      // If both are dated, sort on date...
      else if (a.data.date && b.data.date) {
        return a.data.date < b.data.date ? 1 : -1;
      }

      // Otherwise, sort on title
      else {
        return a.data.title > b.data.title ? 1 : -1;
      }
    });

  return posts;
};

export const getPostMeta = (filename: string): PostInterface => {
  const slug = filename.replace(/\.mdx?$/, '');
  const postFile = join('_posts', filename);

  const fileContents = fs.readFileSync(postFile, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug,
    file: postFile,
    url: `/${slug}`,
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
    content,
  };
};
