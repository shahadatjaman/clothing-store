import React, { FC } from 'react';
import { ContainerStyled } from './Styles';
import { ContainerPropsTypes } from '@/types/ContainerPropsTypes';

const Container: FC<ContainerPropsTypes> = (props) => {
  const { children, maxWidth } = props;
  return <ContainerStyled maxWidth={maxWidth}>{children}</ContainerStyled>;
};

export default Container;
