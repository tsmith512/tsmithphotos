import style from '../styles/postindex.module.scss';

import { PostInterface } from '../lib/posts';
import { processedImage } from '../lib/images';

interface PostIndexProps {
  posts: PostInterface[],
}

export const PostIndex = (props: PostIndexProps) => {

  const buttons = props.posts.map(post => {
    const filename = post.data.image;
    const image = processedImage(filename);

    return (
      <div className={style.box} key={post.slug}>
        <a className={style.link} href={post.url}>
          <div>
            <img
              src={image.fullSrc}
              srcSet={image.srcSet}
              sizes='(min-width: 1200px) 400px, 100vw'
              width={image.width}
              height={image.height}
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
