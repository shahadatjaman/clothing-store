import React, { FC } from 'react';
import { SectionStyled } from './Styles';
import { SectionPropsTypes } from '@/types/sectionPropsTypes';

const Section: FC<SectionPropsTypes> = (props) => {
  const { children } = props;
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
