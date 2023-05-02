import { ReactNode } from 'react';

export interface DropdownPropsTypes {
  children: ReactNode;
  isOpen: boolean;
  closeHandler: () => void;
  width?: number;
  height?: number;
  element?: ReactNode;
  padding?: number;
  right?: number;
  top?: number;
}
