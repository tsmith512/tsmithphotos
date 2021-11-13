import { ReactElement } from 'react';
import style from '../styles/banner.module.scss';

interface BannerProps {
  children?: any
}

export const Banner: React.FC<BannerProps> = (props): ReactElement => {
  const filename = 'DSC_2888.jpg';
  const colors = require(`../public/photos/${filename}?lqip-colors`);
  const srcset = require(`../public/photos/${filename}?resize&sizes[]=400&sizes[]=600&sizes[]=800&sizes[]=1200`);

  return (
    <section className={style.container}>
      <div className={style.contentPanel}>
        <div className={style.content}>
          {props.children}
        </div>
      </div>
      <div className={style.graphicPanel} style={{ backgroundColor: colors[0] }}>
        <img
          src={srcset.src}
          srcSet={srcset.srcSet}
          sizes='(min-width: 960px) 50vw, 100vw'
          width={srcset.width}
          height={srcset.height}
          className={style.graphic} />
      </div>
    </section>
  );
}
