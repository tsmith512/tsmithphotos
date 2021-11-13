import style from '../styles/photo.module.scss';

interface PhotoProps {
  children?: any
}

export const Photo = (props: PhotoProps) => {
  const filename = 'DSC_9070.jpg'; //'DSC_2836.jpg';
  const link = require(`../public/photos/${filename}?resize&size=1600`);
  const srcset = require(`../public/photos/${filename}?resize&sizes[]=400&sizes[]=600&sizes[]=800&sizes[]=1200`);

  return (
    <section className={style.container}>
      <div className={style.photoPanel}>
        <a href={link}>
          <img
            src={srcset.src}
            srcSet={srcset.srcSet}
            sizes='(min-width: 1200px) 1200px, 100vw'
            width={srcset.width}
            height={srcset.height}
            className={style.photo} />
        </a>
      </div>
      <div className={style.footerPanel}>
        {props.children}
      </div>
    </section>
  );
}
