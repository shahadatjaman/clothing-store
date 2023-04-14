import React, { FC } from 'react';

import { ProductButtons } from './Styles';
import Buttons from './Buttons';

/* Define interface for props */
interface ButtonsPropsTypes {
  isHovered: boolean;
  _id: string;
}

const ButtonsGroup: FC<ButtonsPropsTypes> = (props) => {
  const { isHovered } = props;

  return (
    <ProductButtons>
      <Buttons isHovered={isHovered} />
    </ProductButtons>
  );
};

export default ButtonsGroup;
