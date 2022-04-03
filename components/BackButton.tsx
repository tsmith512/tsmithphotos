import style from '../styles/backbutton.module.scss';

interface BackButtonProps {
  url: string;
  children?: any;
}

export const BackButton = (props: BackButtonProps) => {
  return (
    <a className={style.button} href={props.url}>
      <img
        className={style.icon}
        src={require('../public/gfx/back.svg')}
        aria-label="Back to Album"
      />
      <span className={style.text}>{props.children}</span>
    </a>
  );
};
