import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  Close,
  DismissIcon,
  ModalBody,
  ModalContent,
  ModalHeader,
  Wrapper,
} from './Styles';
import { ModalPropsTypes } from '@/types/modalPropsTypes';

const Modal: FC<ModalPropsTypes> = ({
  isOpen,
  width,
  closeModal,
  children,
}) => {
  return ReactDOM.createPortal(
    <Wrapper isOpen={isOpen}>
      <ModalContent width={width} isOpen={isOpen}>
        <ModalHeader>
          <Close onClick={closeModal}>
            <DismissIcon />
          </Close>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Wrapper>,
    document.body,
  );
};

export default Modal;
