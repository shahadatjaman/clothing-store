
type loadingPosition = 'start' | 'end';

import { ElementType, ReactNode } from 'react';


export interface LoadingButtonProps {
  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default root element.
   */
  component?: ElementType;
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, no elevation is used.
   */
  disableElevation?: boolean;
  /**
   * If `true`, the keyboard focus ripple will be disabled.
   */
  disableFocusRipple?: boolean;
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple?: boolean;
  /**
   * Element placed before the children. It's a good place for an icon.
   */
  startIcon?: ReactNode;
  /**
   * Element placed after the children. It's a good place for an icon.
   */
  endIcon?: ReactNode;
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant to use.
   */
  variant?: 'text' | 'outlined' | 'contained';
  
  /**
   *
   * Button width. What'll be button width
   *
   */
  fullWidth?: boolean,

 /**
   *
   * When load data or call api. 
   *
   */
   loading: boolean,

  
  /**
    *
    * When the button is loading the loading icon where should be load.    * could be start or end.
    *
    */
    loadingPosition?: loadingPosition, 
    
}



