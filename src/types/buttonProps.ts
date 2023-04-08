
type loadingPosition = 'start' | 'end';

import { string } from 'prop-types';
import { ElementType, ReactNode } from 'react';


export interface ButtonPropsTypes {
  /**
   * The content of the button.
   */
  children: ReactNode;

  
  /**
   *
   * When user click on the button.
   *
   */
  onClick? : ()=> any,
  
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes?: Record<string, string>;
  /**
   * The color of the button. It supports those theme colors that make sense for this component.
   */
  color?: 'inherit' | 'primary' | 'secondary';
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

}



export default ButtonPropsTypes;
