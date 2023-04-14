import React, { FC, ReactNode } from 'react';
import { ProductButton } from './Styles';
interface ButtonProps {
  children?: ReactNode;
  text: string;
  element: ReactNode;
  clickHandler?: () => void;
  isHovered: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, element, clickHandler } = props;

  return (
    <ProductButton
      isHovered={props.isHovered}
      onClick={clickHandler}
      title={text}
    >
      {element}
    </ProductButton>
  );
};

export default Button;
