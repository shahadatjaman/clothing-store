import React, { FC, ReactElement, ReactNode } from 'react';
import { ProductButton } from './Styles';
interface ButtonProps {
  children?: ReactNode;
  text: string;
  element: ReactNode;
}

const Button: FC<ButtonProps> = (props, { children }) => {
  return <ProductButton title={props.text}>{props.element}</ProductButton>;
};

export default Button;
