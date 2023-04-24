import Dropdown from '@/shared/Dropdown';
import { DropdownPropsTypes } from '@/types/dropdownPropsTypes';
import React, { FC } from 'react';

const DropdowModal: FC<DropdownPropsTypes> = (props) => {
  const { isOpen, children, height, closeHandler, element, padding } = props;
  return (
    <Dropdown
      isOpen={isOpen}
      closeHandler={closeHandler}
      width={280}
      height={height}
      padding={padding}
      top={155}
      element={element}
    >
      {children}
    </Dropdown>
  );
};

export default DropdowModal;
