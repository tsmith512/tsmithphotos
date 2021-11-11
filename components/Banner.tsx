import style from '../styles/banner.module.scss';

interface BannerProps {
  children?: any
}

export const Banner = (props: BannerProps) => {
  return (
    <section className={style.container}>
      <div className={style.contentPanel}>
        <div className={style.content}>
          {props.children}
        </div>
      </div>
      <div className={style.graphicPanel}>
        <img src={require('../public/photos/DSC_2888.jpg')} className={style.graphic} />
      </div>
    </section>
  );
}
