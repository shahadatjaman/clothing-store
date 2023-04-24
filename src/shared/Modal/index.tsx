import React, { FC, useRef } from 'react';
import {
  Close,
  DismissIcon,
  ModalBody,
  ModalContent,
  ModalHeader,
  Wrapper,
} from './Styles';
import { ModalPropsTypes } from '@/types/modalPropsTypes';

const Modal: FC<ModalPropsTypes> = (props) => {
  const { isOpen, width, closeModal, children } = props;

  return (
    <Wrapper isOpen={isOpen}>
      <ModalContent width={width} isOpen={isOpen}>
        <ModalHeader>
          <Close onClick={closeModal}>
            <DismissIcon />
          </Close>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;
