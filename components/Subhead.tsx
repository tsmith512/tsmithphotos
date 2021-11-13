import { ReactElement } from 'react';

interface SubheadProps {
  children?: any
}

export const Subhead: React.FC<SubheadProps> = (props): ReactElement => {
  return (
    <p className='subhead'>{props.children}</p>
  );
}
