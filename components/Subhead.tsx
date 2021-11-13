import style from '../styles/text.module.scss';

interface SubheadProps {
  children?: any
}

export const Subhead = (props: SubheadProps) => {
  return (
    <p className='subhead'>{props.children}</p>
  );
}
