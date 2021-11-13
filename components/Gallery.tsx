import { ReactElement } from 'react';
import style from '../styles/gallery.module.scss';

interface GalleryProps {
  children?: any
}

const photos = [
  'DSC_1809.jpg',
  'DSC_1941.jpg',
  'DSC_2138.jpg',
  'PXL_20210704_025618792.jpg',
  'PXL_20210719_164655421.jpg',
  'DSC_2152.jpg',
  'DSC_2264.jpg',
  'DSC_2569.jpg',
  'PXL_20210719_183515893.jpg',
  'DSC_2694.jpg',
  'DSC_9132.jpg',
  'DSC_2775.jpg',
  'DSC_2836.jpg',
  'DSC_2846.jpg',
  'DSC_2888.jpg',
  'DSC_8920.jpg',
  'DSC_8926.jpg',
  'PXL_20210704_1548541082.jpg',
  'DSC_8927.jpg',
  'DSC_8946.jpg',
  'DSC_9148.jpg',
  'DSC_8973.jpg',
  'DSC_8976.jpg',
  'DSC_8984.jpg',
  'DSC_8990.jpg',
  'DSC_9001.jpg',
  'DSC_9009.jpg',
  'DSC_9024.jpg',
  'DSC_9070.jpg',
  'DSC_9094.jpg',
  'DSC_9113.jpg',
  'DSC_9152.jpg',
];

export const Gallery: React.FC<GalleryProps> = (props): ReactElement => {
  return (
    <section className={style.container} id='test'>
      <div className={style.thumbPanel} data-pswp-container>
        {photos.map(src => {
          const url = `/photos/${src}`;
          const link = require(`../public/photos/${src}?resize&size=1600`);
          const colors = require(`../public/photos/${src}?lqip-colors`);
          const srcset = require(`../public/photos/${src}?resize&sizes[]=200&sizes[]=400&sizes[]=600&sizes[]=800`);

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
