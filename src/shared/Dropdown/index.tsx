import React, { FC } from 'react';
import { DropdownPropsTypes } from '@/types/dropdownPropsTypes';
import { CartLayout, CartContent, ChildrenContent } from './Styles';

const Dropdown: FC<DropdownPropsTypes> = (props) => {
  const { width, isOpen, padding, height, right, top, closeHandler, element } =
    props;

  return (
    <CartLayout>
      {element}
      <CartContent
        height={height}
        isOpen={isOpen}
        cartWidth={width}
        right={right}
        top={top}
      >
        <ChildrenContent padding={padding} isOpen={isOpen}>
          {props.children}
        </ChildrenContent>
      </CartContent>
    </CartLayout>
  );
};

export default Dropdown;
