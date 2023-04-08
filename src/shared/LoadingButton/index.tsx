import React from 'react';
import { StyledButton } from './Styles';
import { LoadingButtonProps } from '@/types/loadingButtonProps';

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  ...restProps
}) => <StyledButton {...restProps}>{children}</StyledButton>;

export { LoadingButton };
