import { ReactElement } from 'react';
import { processedImage } from '../lib/images';
import style from '../styles/gallery.module.scss';

interface GalleryProps {
  children?: any;
  filenames: string[];
  row?: boolean | null;
  vertical?: boolean | null;
}

export const Gallery: React.FC<GalleryProps> = (props): ReactElement => {
  const photos = props.filenames;

  const row = props.filenames.length <= 4 || props.row ? true : null;
  const pair = props.filenames.length === 2 ? true : null;

  const options = [style.thumbPanel];
  if (row) {
    options.push(style.row);
  }

  if (props.vertical) {
    options.push(style.vertical)
  }

  return (
    <section className={style.container}>
      <div
        className={options.join(' ')}
        data-pswp-container
        data-row={row}
        data-count={photos.length}
      >
        {photos.map((src) => {
          const image = processedImage(src);

          return (
            <a
              key={src}
              href={image.fullSrc}
              className={style.thumbLink}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              data-cropped="true"
              target="_blank"
            >
              <div className={style.thumbIRContainer}>
                <img
                  className={style.thumbImg}
                  src={image.fullSrc}
                  srcSet={image.srcSet}
                  sizes={`(min-width: 720px) ${pair ? '600px' : '400px'}, 50vw`}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
              </div>
            </a>
          );
        })}
      </div>
      <div className={style.footerPanel}>{props.children}</div>
    </section>
  );
};
