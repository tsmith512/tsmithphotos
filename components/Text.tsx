import style from '../styles/text.module.scss';

interface TextProps {
  children?: any;
}

export const Text = (props: TextProps) => {
  return (
    <section className={style.container}>
      <div className={style.textPanel}>{props.children}</div>
    </section>
  );
};
