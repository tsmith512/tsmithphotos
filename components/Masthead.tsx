import style from '../styles/masthead.module.scss';

interface MastheadProps {
  children?: any,
  title: string,
}

export const Masthead = (props: MastheadProps) => {
  return (
    <section className={style.container}>
      <div className={style.textPanel}>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </section>
  );
}
