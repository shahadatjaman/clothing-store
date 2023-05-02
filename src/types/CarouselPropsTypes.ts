import { ReactNode } from 'react';

interface Obj {
  device: 'desktop' | 'tablet' | 'mobile';
  items: number;
}

export interface CarouselPropsTypes {
  children: ReactNode;
  respon?: Obj;
  buttonsPosition: 'top-right' | 'left-right';
  draggable: boolean;
}
