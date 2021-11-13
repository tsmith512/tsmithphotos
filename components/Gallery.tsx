import { ReactElement } from 'react';
import style from '../styles/gallery.module.scss';

interface GalleryProps {
  children?: any
  filenames: string[],
  row: boolean | null,
}

export const Gallery: React.FC<GalleryProps> = (props): ReactElement => {
  const photos = props.filenames;
  const row = props.row ? true : null;

  return (
    <section className={style.container} >
      <div className={style.thumbPanel} data-pswp-container data-row={row}>
        {photos.map(src => {
          const url = `/photos/${src}`;
          const link = require(`../photos/${src}?resize&size=1600`);
          const colors = require(`../photos/${src}?lqip-colors`);
          const srcset = require(`../photos/${src}?resize&sizes[]=200&sizes[]=400&sizes[]=600&sizes[]=800`);

          return (
            <a
              key={src}
              href={link}
              className={style.thumbLink}
              style={{ backgroundColor: colors[0] }}
              data-pswp-width={link.width}
              data-pswp-height={link.height}
              data-cropped="true"
              target="_blank">
              <img
                className={style.thumbImg}
                src={srcset.src}
                srcSet={srcset.srcSet}
                sizes='(min-width: 720px) 400px, 50vw'
                width={srcset.width}
                height={srcset.height}
                loading="lazy"
              />
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
