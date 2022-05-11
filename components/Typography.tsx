import { ReactElement } from 'react';

interface TypographyProps {
  children?: any;
}

export const Subhead: React.FC<TypographyProps> = (props): ReactElement => {
  return <p className="subhead">{props.children}</p>;
};

export const Date: React.FC<TypographyProps> = (props): ReactElement => {
  return <p className="date">{props.children}</p>;
};
