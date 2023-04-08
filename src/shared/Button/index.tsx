import React from 'react';
import { StyledButton } from './Styles';
import { ButtonPropsTypes } from '@/types/buttonProps';

const Button: React.FC<ButtonPropsTypes> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);

export { Button };
