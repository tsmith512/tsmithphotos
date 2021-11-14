import style from '../styles/postindex.module.scss';

import { PostInterface } from '../lib/posts';

interface PostIndexProps {
  posts: PostInterface[],
}

export const PostIndex = (props: PostIndexProps) => {

  const buttons = props.posts.map(post => {
    const filename = post.data.image;
    const link = require(`../photos/${filename}?resize&size=1600`);
    const srcset = require(`../photos/${filename}?resize&sizes[]=400&sizes[]=600&sizes[]=800&sizes[]=1200`);

    return (
      <div className={style.box}>
        <a className={style.link} href={post.url}>
          <div>
            <img
              src={srcset.src}
              srcSet={srcset.srcSet}
              sizes='(min-width: 1200px) 400px, 100vw'
              width={srcset.width}
              height={srcset.height}
              className={style.image} />
            <span className={style.title}>
              {post.data.title}
            </span>
          </div>
        </a>
      </div>
    );
  });

  return (
    <main className={style.container}>
      {buttons.map(button => button)}
    </main>
  );
}
