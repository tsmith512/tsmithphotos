import { ReactElement } from 'react';
import { processedImage } from '../lib/images';
import style from '../styles/story.module.scss';

interface StoryProps {
  children?: any;
  filename: string;
  copy: string;
}

export const Story: React.FC<StoryProps> = (props): ReactElement => {
  const filename = props.filename;
  const image = processedImage(filename);

  return (
    <section className={style.container} data-align={props.copy}>
      <div className={style.contentPanel}>
        <div className={style.content}>{props.children}</div>
      </div>
      <div className={style.photoPanel} data-pswp-container>
        <a
          href={image.fullSrc}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          data-cropped="true"
          target="_blank"
        >
          <img
            src={image.fullSrc}
            srcSet={image.srcSet}
            sizes="(min-width: 1200px) 600px, 100vw"
            width={image.width}
            height={image.height}
            className={style.photo}
          />
        </a>
      </div>
    </section>
  );
};
