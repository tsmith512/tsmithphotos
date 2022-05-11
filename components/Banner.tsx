import { ReactElement } from 'react';
import style from '../styles/banner.module.scss';
import { processedImage } from '../lib/images';

interface BannerProps {
  children?: any;
  filename: string;
  fullscreen?: boolean;
}

export const Banner: React.FC<BannerProps> = (props): ReactElement => {
  const filename = props.filename;
  const image = processedImage(filename);

  return (
    <section className={props.fullscreen ? style.containerFull : style.container}>
      <div className={style.contentPanel}>
        <div className={style.content}>{props.children}</div>
      </div>
      <div className={style.graphicPanel}>
        <img
          src={image.fullSrc}
          srcSet={image.srcSet}
          sizes={props.fullscreen ? "100vw" : "(min-width: 960px) 50vw, 100vw"}
          width={image.width}
          height={image.height}
          className={style.graphic}
        />
      </div>
    </section>
  );
};
