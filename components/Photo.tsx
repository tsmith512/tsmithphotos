import { ReactElement } from 'react';
import { processedImage } from '../lib/images';
import style from '../styles/photo.module.scss';

interface PhotoProps {
  children?: any;
  filename: string;
}

export const Photo: React.FC<PhotoProps> = (props): ReactElement => {
  const filename = props.filename;
  const image = processedImage(filename);

  return (
    <section className={style.container}>
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
            sizes="(min-width: 1200px) 1200px, 100vw"
            width={image.width}
            height={image.height}
            className={style.photo}
          />
        </a>
      </div>
      <div className={style.footerPanel}>{props.children}</div>
    </section>
  );
};
