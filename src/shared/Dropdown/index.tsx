import React, { FC } from 'react';
import { DropdownPropsTypes } from '@/types/dropdownPropsTypes';
import { CartLayout, CartContent, ChildrenContent } from './Styles';

const Dropdown: FC<DropdownPropsTypes> = (props) => {
  const { width, isOpen, paddding, height } = props;

  return (
    <CartLayout>
      <CartContent
        padding={paddding}
        height={height}
        isOpen={isOpen}
        cartWidth={width}
      >
        {isOpen && (
          <ChildrenContent padding={1} isOpen={isOpen}>
            {props.children}
          </ChildrenContent>
        )}
      </CartContent>
    </CartLayout>
  );
};

export default Dropdown;
