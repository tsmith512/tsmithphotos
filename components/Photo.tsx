import style from '../styles/photo.module.scss';

interface PhotoProps {
  children?: any
}

export const Photo = (props: PhotoProps) => {
  return (
    <section className={style.container}>
      <div className={style.photoPanel}>
        <img src={require('../public/photos/DSC_2836.jpg')} className={style.photo} />
      </div>
      <div className={style.footerPanel}>
        {props.children}
      </div>
    </section>
  );
}
