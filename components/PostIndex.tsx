import style from '../styles/postindex.module.scss';

import { PostInterface } from '../lib/posts';
import { processedImage } from '../lib/images';

interface PostIndexProps {
  post: PostInterface;
  index?: number;
}

export const PostIndex = (props: PostIndexProps) => {
  const filename = props.post.data.image;
  const image = processedImage(filename);

  return (
    <div className={style.container}>
      <div className={style.box} key={props.post.slug}>
        <a className={style.link} href={props.post.url}>
          <div className={style.header}>
            <div className={style.ir}>
              <img
                src={image.fullSrc}
                srcSet={image.srcSet}
                sizes="(min-width: 1200px) 600px, 100vw"
                width={image.width}
                height={image.height}
                className={style.image}
                loading={props.index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            <h1 className={style.title}>{props.post.data.title}</h1>
          </div>
          <p className={style.subhead}>{props.post.data.subhead}</p>
        </a>
      </div>
    </div>
  );
};
