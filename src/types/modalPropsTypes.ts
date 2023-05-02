import { ReactNode } from 'react';

export interface ModalPropsTypes {
  isOpen: boolean;
  closeModal: () => void;
  width: number;
  padding: number;
  children: ReactNode;
}
