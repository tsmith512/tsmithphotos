import { ReactElement } from 'react';
import style from '../styles/gallery.module.scss';

interface GalleryProps {
  children?: any,
  filenames: string[],
  row?: boolean | null,
}

export const Gallery: React.FC<GalleryProps> = (props): ReactElement => {
  const photos = props.filenames;

  const row = (props.filenames.length <= 4 || props.row) ? true : null;
  const pair = (props.filenames.length === 2) ? true : null;

  const options = [style.thumbPanel];
  if (row) { options.push(style.row); }


  return (
    <section className={style.container} >
      <div className={options.join(' ')} data-pswp-container data-row={row} data-count={photos.length}>
        {photos.map(src => {
          const url = `/photos/${src}`;
          const link = require(`../photos/${src}?resize&size=1600`);
          const srcset = require(`../photos/${src}?resize&sizes[]=200&sizes[]=400&sizes[]=600&sizes[]=800`);

          return (
            <a
              key={src}
              href={link}
              className={style.thumbLink}
              data-pswp-width={link.width}
              data-pswp-height={link.height}
              data-cropped="true"
              target="_blank">
              <div className={style.thumbIRContainer}>
                <img
                  className={style.thumbImg}
                  src={srcset.src}
                  srcSet={srcset.srcSet}
                  sizes={`(min-width: 720px) ${pair ? '600px' : '400px'}, 50vw`}
                  width={srcset.width}
                  height={srcset.height}
                  loading="lazy"
                />
              </div>
            </a>
          );
        })}
      </div>
      <div className={style.footerPanel}>
        {props.children}
      </div>
    </section>
  );
};
