import style from '../styles/postindex.module.scss';

import { PostInterface } from '../lib/posts';
import { processedImage } from '../lib/images';

interface PostIndexProps {
  posts: PostInterface[];
}

export const PostIndex = (props: PostIndexProps) => {
  const buttons = props.posts.map((post) => {
    const filename = post.data.image;
    const image = processedImage(filename);

    return (
      <div className={style.box} key={post.slug}>
        <a className={style.link} href={post.url}>
          <div className={style.header}>
            <div className={style.ir}>
              <img
                src={image.fullSrc}
                srcSet={image.srcSet}
                sizes="(min-width: 1200px) 600px, 100vw"
                width={image.width}
                height={image.height}
                className={style.image}
              />
            </div>
            <h1 className={style.title}>{post.data.title}</h1>
          </div>
          <p className={style.subhead}>{post.data.subhead}</p>
        </a>
      </div>
    );
  });

  return <main className={style.container}>{buttons.map((button) => button)}</main>;
};
